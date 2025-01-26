```javascript
// pages/api/data.js
export default function handler(req, res) {
  if (req.method === 'GET') {
    // Simulate an asynchronous operation that might fail
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(200).json({ data: 'Success!' });
      }
    }, 1000); 
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
```