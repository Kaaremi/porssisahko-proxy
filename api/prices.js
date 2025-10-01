export default async function handler(req, res) {
  const response = await fetch('https://api.porssisahko.net/v1/latest-prices');
  const data = await response.json();

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  res.status(200).json(data);
}
