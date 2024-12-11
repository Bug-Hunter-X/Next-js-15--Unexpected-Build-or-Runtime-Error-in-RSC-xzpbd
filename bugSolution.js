```javascript
// pages/index.js
export default async function Home() {
  const response = await fetch('/api/data');
  const data = await response.json();

  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <p>Data from API: {JSON.stringify(data)}</p>
    </div>
  );
}

// pages/api/data.js
export default function handler(req, res) {
  res.status(200).json({ text: 'Data from server' });
}
```