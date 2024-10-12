import React, { useState, useEffect, useRef } from "react";
import "./LandingPage.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideRef = useRef(null); // To reference the container holding slides

    const images = [
        { src: "/images/freshVeg2.jpg", alt: "Clothes", title: "vegetables", description: "Explore our latest offers." },
        { src: "/images/fruits.jpg", alt: "Fruits", title: "Fresh Fruits", description: "Get fresh fruits with a great discount." },
        { src: "/images/nuts.jpg", alt: "Vegetables", title: "Nuts", description: "Check out our Nuts deals." },
        { src: "/images/beverage.jpg", alt: "Beverages", title: "Beverages", description: "Refresh with our special offers." },
        { src: "/images/snacks.jpg", alt: "Snacks", title: "Snacks", description: "Delicious snacks at unbeatable prices." },
    ];

    // Function to show the slide based on the index
    const showSlide = (index) => {
        if (index >= images.length) {
            setCurrentIndex(0); // Wrap around to the first slide
        } else if (index < 0) {
            setCurrentIndex(images.length - 1); // Wrap around to the last slide
        } else {
            setCurrentIndex(index); // Move to the specific index
        }
    };

    // Function to move to the next or previous slide
    const moveSlide = (n) => {
        showSlide(currentIndex + n);
    };

    // Automatically move to the next slide every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            moveSlide(1);
        }, 2000);
        return () => clearInterval(interval); // Clear interval when component unmounts
    }, [currentIndex]);

    // Update the carousel's sliding effect using the ref to the container
    useEffect(() => {
        const slideWidth = slideRef.current.clientWidth;
        slideRef.current.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }, [currentIndex]);

    return (
        <section className="product-grid-section">
            <h3 className="text-center">
                <strong>Our Biggest Offers</strong>
            </h3>
            <div className="carousel-container">
                <div className="carousel-slide" ref={slideRef} style={{ display: "flex", transition: "transform 0.5s ease-in-out" }}>
                    {images.map((image, index) => (
                        <div key={index} className="product-grid-item" style={{ minWidth: "100%" }}>
                            <img src={image.src} alt={image.alt} className="product-image" />
                            <div className="product-info">
                                <h4>{image.title}</h4>
                                <p>{image.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button className="prev" onClick={() => moveSlide(-1)}>&#10094;</button>
            <button className="next" onClick={() => moveSlide(1)}>&#10095;</button>
        </section>
    );
};

export default Carousel;
