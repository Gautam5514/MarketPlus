import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "./LandingPage.css"; // Your custom styles
import "@fortawesome/fontawesome-free/css/all.min.css";

// Import required modules
import { Autoplay } from "swiper/modules";

const Carousel = () => {
    const images = [
        {
            src: "/images/flipkart.webp",
            alt: "Vegetables",
            title: "Vegetables",
            description: "Explore our latest offers."
        },
        {
            src: "/images/fruits.jpg",
            alt: "Fruits",
            title: "Fresh Fruits",
            description: "Get fresh fruits with a great discount."
        },
        {
            src: "/images/Off.png",
            alt: "Nuts",
            title: "Nuts",
            description: "Check out our nuts deals."
        },
        {
            src: "/images/beverage.jpg",
            alt: "Beverages",
            title: "Beverages",
            description: "Refresh with our special offers."
        },
        {
            src: "/images/snacks.jpg",
            alt: "Snacks",
            title: "Snacks",
            description: "Delicious snacks at unbeatable prices."
        },
    ];

    return (
        <section className="product-grid-section">
            <h3 className="text-center">
                <strong>Our Biggest Offers</strong>
            </h3>
            <Swiper
                autoplay={{ delay: 2000, disableOnInteraction: false }} // Auto slide every 2 seconds
                spaceBetween={30} // Space between slides
                slidesPerView={1} // Show one slide at a time
                loop={true} // Infinite loop
                modules={[Autoplay]} // Enable required modules
                className="mySwiper size"
            >
                {images.map((image, index) => (
                    <SwiperSlide className="bg-light " key={index}>
                        <div className="product-grid-item">
                            <img src={image.src} alt={image.alt} className="product-image h-25" />
                            <div className="product-info">
                                <h4>{image.title}</h4>
                                <p>{image.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Carousel;
