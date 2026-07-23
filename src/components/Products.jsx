import { useState } from "react";
function Products() {
  const [collection, setCollection] = useState(null);
  const products = [
    {
      key:"ethnic",
      title: "Ethnic Wear",
      image: "/images/ethnic.png",
      position: "center 16%",
    },
    {
      key:"modern",
      title: "Modern Wear",
      image: "/images/modern.png",
       position: "center 10%",
    },
    {
      key:"bridal",
      title: "Bridal Wear",
      image: "/images/bride.png",
       position: "center 5%",
    },
    {
      key:"party",
      title: "Party Wear",
      image: "/images/party.jpg",
       position: "center 15%",
    },
  ];
 
if (collection === "ethnic") {
  return (
    <section className="collection-section">
      <h2>Ethnic Wear Collection</h2>

      <img src="/images/ethnic1.jpg" alt="" />
      <img src="/images/ethnic4.jpg" alt="" style={{ objectPosition: "center 15%" }}/>
      <img src="/images/ethnic3.jpg" alt="" style={{ objectPosition: "center 10%" }}/>
      <img src="/images/ethnic2.jpg" alt="" />

      <button onClick={() => setCollection(null)}>
        Back
      </button>
    </section>
  );
}
if (collection === "modern") {
  return (
    <section className="collection-section">
      <h2>Modern Wear Collection</h2>

      <img src="/images/modern1.jpg" alt="" style={{ objectPosition: "center 10%" }} />
      <img src="/images/modern4.jpg" alt="" style={{ objectPosition: "center 10%" }} />
      <img src="/images/modern5.jpg" alt="" style={{ objectPosition: "center 10%" }} />
      <img src="/images/modern2.jpg" alt="" style={{ objectPosition: "center 10%" }} />

      <button onClick={() => setCollection(null)}>
        Back
      </button>
    </section>
  );
}
if (collection === "bridal") {
  return (
    <section className="collection-section">
      <h2>Bridal Wear Collection</h2>

      <img  src="/images/bridal4.jpg" alt="" style={{ objectPosition: "center 15%" }}/>
       <img  src="/images/bridal1.jpg"  alt=""  style={{ objectPosition: "center 25%" }} />
      <img  src="/images/bridal2.jpg"  alt=""  style={{ objectPosition: "center 40%" }}  />
      <img src="/images/bridal3.jpg"  alt=""  style={{ objectPosition: "center 10%" }}/>

      <button onClick={() => setCollection(null)}>
        Back
      </button>
    </section>
  );
}
if (collection === "party") {
  return (
    <section className="collection-section">
      <h2>Party Wear Collection</h2>

      <img  src="/images/party1.jpg" alt="" style={{ objectPosition: "center 30%" }} />
      <img  src="/images/party2.jpg"  alt=""  style={{ objectPosition: "center 35%" }} />
       <img src="/images/party4.jpg" alt=""   style={{ objectPosition: "center 0%" }} />
     <img  src="/images/party5.jpg"  alt=""  style={{ objectPosition: "center 85%" }} />

      <button onClick={() => setCollection(null)}>
        Back
      </button>
    </section>
  );
}

  return (
    <section className="products" id="products">
      <h2>Our Collection</h2>

      <div className="product-grid">
        {products.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.title} 
            style={{objectPosition:item.position}}/>
            <h3>{item.title}</h3>
             <button onClick={() => setCollection(item.key)}>
  View Collection
</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;