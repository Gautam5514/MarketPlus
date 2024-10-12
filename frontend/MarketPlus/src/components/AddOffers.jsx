import "./LandingPage.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function AddOffers() {
  return (
    <div>
      <section className="product-grid-section">
                <h3 className="text-center">
                    <strong>New Offers Product</strong>
                </h3>
                <div className="product-grid-container">
                    <div className="product-grid-item ">
                        <img
                            src="/images/fresh1.jpg"
                            alt="Clothes"
                            className="product-image"
                        />
                        <div className="product-info">
                            <h4>Vegitables</h4>
                            <p>Explore and purchase our fresh vegitables.</p>
                        </div>
                    </div>
                    <div className="product-grid-item">
                        <img
                            src="/images/fresh2.jpg"
                            alt="Shoes"
                            className="product-image"
                        />
                        <div className="product-info">
                            <h4>Fruits</h4>
                            <p>Tasty and fresh fruits.</p>
                        </div>
                    </div>
                    <div className="product-grid-item">
                        <img
                            src="/images/fresh3.jpg"
                            alt="Mobile / Laptop"
                            className="product-image"
                        />
                        <div className="product-info">
                            <h4>Nuts</h4>
                            <p>New Arrival Items.</p>
                        </div>
                    </div>
                    <div className="product product-grid-item ">
                        <img
                            src="/images/fresh4.jpg"
                            alt="Pharmacy"
                            className="product-image"
                        />
                        <div className="product-info">
                            <h4>Cold Drinks</h4>
                            <p>All are comes with offers.</p>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default AddOffers
