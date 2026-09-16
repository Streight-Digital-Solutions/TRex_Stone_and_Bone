/* global process */

export default async function handler(req, res) {
  const token = process.env.SQUARE_ACCESS_TOKEN;

  if (!token) {
    return res.status(500).json({
      error: "Square access token is not configured",
    });
  }

  try {
    const response = await fetch(
      "https://connect.squareupsandbox.com/v2/catalog/list?types=ITEM,IMAGE",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Square-Version": "2026-08-19",
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    const objects = data.objects || [];

    const imageUrlById = {};
    for (const obj of objects) {
      if (obj.type === "IMAGE" && obj.image_data?.url) {
        imageUrlById[obj.id] = obj.image_data.url;
      }
    }

    const products = objects
      .filter((obj) => obj.type === "ITEM")
      .map((obj) => {
        const item = obj.item_data || {};
        const variation = item.variations?.[0]?.item_variation_data;
        const priceMoney = variation?.price_money;
        const imageId = item.image_ids?.[0];

        return {
          id: obj.id,
          variationId: item.variations?.[0]?.id || null,
          name: item.name || "Untitled piece",
          description: item.description || "",
          price: priceMoney
            ? formatMoney(priceMoney.amount, priceMoney.currency)
            : null,
          imageUrl: imageId ? imageUrlById[imageId] || null : null,
        };
      });

    res.setHeader("Cache-Control", "no-store");

    return res.status(200).json({ products });
  } catch (error) {
    return res.status(500).json({
      error: "Failed to connect to Square",
      details: error.message,
    });
  }
}

function formatMoney(amountInSmallestUnit, currency) {
  const amount = amountInSmallestUnit / 100;
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency || "USD",
    }).format(amount);
  } catch {
    return `$${amount.toFixed(2)}`;
  }
}