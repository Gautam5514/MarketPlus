import "./LandingPage.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "./Footer";
import Offers from "./Offers";
import Nav from "./Nav";
import OffersBanners from "./OffersBanners";
import AddOffers from "./AddOffers";
import Carousel from "./Carousel";

export default function LandingPage() {
    return (
        <>
            <Offers />
            <Nav />
            <div className="banner-container">
                <OffersBanners />

                {/* Product Image Card Section */}
                <section className="product-card-section margin">
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
                

            {/* Product Image Section */}
            <div className="product-grid-section">
                <h3 className="text-center">
                    <strong>Featured Products</strong>
                </h3>
                <div className="product-grid-container">
                    <div className="product-grid-item w-124">
                        <img
                            src="/images/offer_banner.jpg"
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
            </div>

            {/* Product Image Card Section */}
            <div className="product-card-section">
                <h3 className="text-center">
                    <strong>Featured Products </strong>
                </h3>
                <div className="product-card-container">
                    <div className="product-card">
                        <img src="/images/grocery.jpg" alt="Product 1" />
                        <h4>Grocery</h4>
                    </div>
                    <div className="product-card">
                        <img src="/images/vegFru.jpg" alt="Product 2" />
                        <h4>Vegitable / fruits</h4>
                    </div>
                    <div className="product-card">
                        <img src="/images/delivery.jpg" alt="Product 3" />
                        <h4>Product Delivery</h4>
                    </div>
                    <div className="product-card">
                        <img src="/images/shooting.jpg" alt="Product 4" />
                        <h4>Video Shooting</h4>
                    </div>
                </div>
            </div>


            <Carousel />

            <AddOffers />

            <Footer />
            </section>
            </div>
        </>
    );
}
