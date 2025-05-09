
import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div style={{ padding: 40, fontFamily: 'Arial' }}>
      <h1>Since Always Studio - Shop</h1>
      {products.length === 0 ? <p>Loading...</p> : (
        products.map((p, i) => (
          <div key={i} style={{ margin: '20px 0' }}>
            <strong>{p.name}</strong><br />
            <button onClick={() => alert('Order logic goes here')}>
              Order
            </button>
          </div>
        ))
      )}
    </div>
  );
}
