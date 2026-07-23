function About() {
  return (
    <>
      <section id="about" className="about">
        <h2>About Us</h2>

        <div className="about-container">
          <div className="about-image">
            <img src="/images/abous.jpeg" alt="About Us" />
          </div>

          <div className="about-text">
            <p>
              We bring you a curated collection of trendy, elegant, and
              high-quality fashion wear. Our boutique is designed to offer
              styles that match modern trends while keeping comfort and
              elegance in mind.
            </p>

            <p>
              From western outfits to traditional wear, each piece is carefully
              selected to match modern trends and ensure comfort.
            </p>
          </div>
        </div>
      </section>

      <section className="reviews" id="reviews">
        <h2>What Our Customers Say</h2>

        <div className="review-container">

          <div className="review-card">
            <div className="stars">★★★★★</div>
            <p>
              "The quality of the dresses is amazing. I received so many
              compliments at a family function!"
            </p>
            <h4>Anikha Sharma</h4>
            <span>Hyderabad</span>
          </div>

          <div className="review-card">
            <div className="stars">★★★★★</div>
            <p>
              "Beautiful collection and excellent customer service.
              The outfits fit perfectly."
            </p>
            <h4>Shrestha</h4>
            <span>Secunderabad</span>
          </div>

          <div className="review-card">
            <div className="stars">★★★★★</div>
            <p>
              "Elegant designs and premium fabric quality.
              Definitely my favorite boutique."
            </p>
            <h4>Ananya Gupta</h4>
            <span>Bangalore</span>
          </div>

        </div>
      </section>
    </>
  );
}

export default About;