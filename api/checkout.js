/* global process */

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  const token = process.env.SQUARE_ACCESS_TOKEN;

  if (!token) {
    return res.status(500).json({
      error: "Square access token is not configured",
    });
  }

  const { variationId } = req.body || {};

  if (!variationId) {
    return res.status(400).json({
      error: "A Square variation ID is required",
    });
  }

  try {
    const response = await fetch(
      "https://connect.squareupsandbox.com/v2/online-checkout/payment-links",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Square-Version": "2026-08-19",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idempotency_key: crypto.randomUUID(),
          order: {
            location_id: process.env.SQUARE_LOCATION_ID,
            line_items: [
              {
                catalog_object_id: variationId,
                quantity: "1",
              },
            ],
          },
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    return res.status(200).json({
      checkoutUrl: data.payment_link?.url || null,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Failed to create Square checkout",
      details: error.message,
    });
  }
}