import React, { useState, useEffect } from "react";

// Array of images for the slider
const images = [
    "./images/pharmacy.jpg",
    "./images/shoes.webp"
];

const MiddleBanner = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        // Set interval for image slider to change every 2 seconds (2000 ms)
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 2000);

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={styles.container}>
            <h2 className="text-dark" style={styles.heading}>
                This is unique section in The Market
            </h2>
            <div style={styles.banner}>
                <img
                    src={images[currentImage]}
                    alt="Banner Slide"
                    style={styles.image}
                />
            </div>
        </div>
    );
};

const styles = {
    container: {
        textAlign: "center",
        marginTop: "20px",
    },
    heading: {
        fontSize: "24px",
        fontWeight: "bold",
        marginBottom: "10px",
    },
    banner: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "300px",
        overflow: "hidden",
        position: "relative",
        marginBottom: "10px"
    },
    image: {
        width: "100%",
        height: "auto",
        transition: "opacity 0.5s ease-in-out",
    },
};

export default MiddleBanner;
