export default async function handler(req, res) {
  const token = process.env.SQUARE_ACCESS_TOKEN;

  if (!token) {
    return res.status(500).json({
      error: "Square access token is not configured"
    });
  }

  try {
    const response = await fetch(
      "https://connect.squareupsandbox.com/v2/catalog/list",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Square-Version": "2026-08-19",
          "Content-Type": "application/json"
        }
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).json({
      error: "Failed to connect to Square",
      details: error.message
    });
  }
}