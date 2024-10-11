import "./LandingPage.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "./Footer";
import Offers from "./Offers";
import Nav from "./Nav";
import OffersBanners from "./OffersBanners";

export default function LandingPage() {
  return (
    <>
      <Offers />
      <Nav />
      <OffersBanners />

      {/* Product Image Card Section */}
      <section className="product-card-section">
        <h3 className="text-center">
          <strong>Featured Products </strong>
        </h3>
        <div className="product-card-container">
          <div className="product-card">
            <img src="/images/clothes.jpg" alt="Product 1" />
            <h4>Clothes</h4>
          </div>
          <div className="product-card">
            <img src="/images/shoes.webp" alt="Product 2" />
            <h4>Shoes</h4>
          </div>
          <div className="product-card">
            <img src="/images/mobiles.jpg" alt="Product 3" />
            <h4>Mobile / Laptop</h4>
          </div>
          <div className="product-card">
            <img src="/images/pharmacy.jpg" alt="Product 4" />
            <h4>Pharmacy</h4>
          </div>
        </div>
      </section>

      {/* Product Image Section */}
      <section className="product-grid-section">
        <h3 className="text-center">
          <strong>Featured Products</strong>
        </h3>
        <div className="product-grid-container">
          <div className="product-grid-item">
            <img
              src="/images/clothes.jpg"
              alt="Clothes"
              className="product-image"
            />
            <div className="product-info">
              <h4>Clothes</h4>
              <p>Explore our latest collection of clothes.</p>
            </div>
          </div>
          <div className="product-grid-item">
            <img
              src="/images/shoes.webp"
              alt="Shoes"
              className="product-image"
            />
            <div className="product-info">
              <h4>Shoes</h4>
              <p>Trendy and comfortable shoes for every occasion.</p>
            </div>
          </div>
          <div className="product-grid-item">
            <img
              src="/images/mobiles.jpg"
              alt="Mobile / Laptop"
              className="product-image"
            />
            <div className="product-info">
              <h4>Mobile / Laptop</h4>
              <p>Latest smartphones and laptops at unbeatable prices.</p>
            </div>
          </div>
          <div className="product-grid-item">
            <img
              src="/images/pharmacy.jpg"
              alt="Pharmacy"
              className="product-image"
            />
            <div className="product-info">
              <h4>Pharmacy</h4>
              <p>Essential healthcare products at your fingertips.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
