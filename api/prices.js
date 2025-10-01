export default async function handler(req, res) {
  try {
    const response = await fetch('https://api.porssisahko.net/v1/price', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; KaaremiProxy/1.0)'
      }
    });

    if (!response.ok) {
      throw new Error(`Upstream error: ${response.status}`);
    }

    const data = await response.json();

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(data);
  } catch (error) {
    console.error('Proxy error:', error.message);
    res.status(500).json({ error: 'Failed to fetch prices' });
  }
}
