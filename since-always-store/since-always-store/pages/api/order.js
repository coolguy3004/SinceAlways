
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const orderData = req.body;

  const result = await fetch('https://api.printful.com/orders', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.PRINTFUL_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(orderData)
  });

  const data = await result.json();
  res.status(result.status).json(data);
}
