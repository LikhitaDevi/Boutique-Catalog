import { useEffect, useState } from "react";

function Home() {
  const images = [
    "/images/one.jpg",
    "/images/about.avif",
    "/images/four.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="slider">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className={`slide ${
              index === currentSlide ? "active" : ""
            }`}
          />
        ))}
      </div>

      <div className="hero-content">
        <h1>Discover Your Style</h1>
        <p>Timeless Fashion. Effortless Elegance</p>

        <a href="#products" className="btn">
          Explore Collection
        </a>
      </div>
    </section>
  );
}

export default Home;