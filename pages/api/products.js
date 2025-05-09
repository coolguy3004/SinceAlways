
export default async function handler(req, res) {
  const result = await fetch('https://api.printful.com/products', {
    headers: { Authorization: `Bearer ${process.env.PRINTFUL_API_KEY}` }
  });
  const data = await result.json();
  res.status(200).json(data.result || []);
}
