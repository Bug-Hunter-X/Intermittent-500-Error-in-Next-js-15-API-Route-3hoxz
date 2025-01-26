```javascript
// pages/api/data.js
export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Simulate an asynchronous operation that might fail
      await new Promise(resolve => setTimeout(resolve, 1000));
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        throw new Error('Simulated Internal Server Error');
      }
      res.status(200).json({ data: 'Success!' });
    } catch (error) {
      console.error('API Route Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
```