export default async function handler(req, res) {
  const token = process.env.SQUARE_ACCESS_TOKEN;

  if (!token) {
    return res.status(500).json({
      error: "Square access token is not configured"
    });
  }

  res.status(200).json({
    message: "Square access token is available!"
  });
}