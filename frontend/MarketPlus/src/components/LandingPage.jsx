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
        <h3 className="text-center">Featured Products</h3>
        <div className="product-card-container">
          <div className="product-card">
            <img src="/images/brandlogo.png" alt="Product 1" />
            <h4>Product 1</h4>
            <p>$20.00</p>
          </div>
          <div className="product-card">
            <img src="/images/home1.jpg" alt="Product 2" />
            <h4>Product 2</h4>
            <p>$30.00</p>
          </div>
          <div className="product-card">
            <img src="/images/home2.jpg" alt="Product 3" />
            <h4>Product 3</h4>
            <p>$25.00</p>
          </div>
          <div className="product-card">
            <img src="/images/favicon.png" alt="Product 4" />
            <h4>Product 4</h4>
            <p>$15.00</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
