import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion } from 'react-bootstrap';
import 'animate.css';
import Footer from './Footer';
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();

  function logOut (){
    localStorage.removeItem("token")
    navigate('/')
  }

  return (
    <div className="min-vh-100 bg-light">
      {/* Hero Section */}
      <div className="d-flex justify-content-center align-items-center bg-primary text-white py-5">
        <div className="text-center">
          <h1 className="display-4 font-weight-bold mb-3 animate__animated animate__fadeInDown">
            Welcome to Our Platform
          </h1>
          <p className="lead mb-4 animate__animated animate__fadeInUp">
            Explore the best content, enhance your knowledge, and join a community of passionate learners.
          </p>
          <a href="#" onClick={logOut} className="btn btn-outline-light btn-lg shadow-sm animate__animated animate__bounceIn">
            Get Started
          </a>
        </div>
      </div>

      {/* Cards Section */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Our Key Features</h2>
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-4">
            <div className="card shadow-lg mb-4 animate__animated animate__zoomIn">
              <div className="card-body">
                <h5 className="card-title">User-Friendly Interface</h5>
                <p className="card-text">
                  Our platform is designed with simplicity and ease of use in mind, allowing you to focus on what matters.
                </p>
                <a href="#" className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="col-md-4">
            <div className="card shadow-lg mb-4 animate__animated animate__zoomIn">
              <div className="card-body">
                <h5 className="card-title">Expert Content</h5>
                <p className="card-text">
                  Access curated content from industry experts to enhance your learning experience.
                </p>
                <a href="#" className="btn btn-primary">
                  Explore Now
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div className="card shadow-lg mb-4 animate__animated animate__zoomIn">
              <div className="card-body">
                <h5 className="card-title">24/7 Support</h5>
                <p className="card-text">
                  Our dedicated support team is available 24/7 to help you with any issues or inquiries.
                </p>
                <a href="#" className="btn btn-primary">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What services do you offer?</Accordion.Header>
            <Accordion.Body>
              We offer a wide range of services including personalized learning paths, expert content, and 24/7 customer support to ensure the best experience.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>How do I get started?</Accordion.Header>
            <Accordion.Body>
              Simply click on the "Get Started" button and create an account. From there, you can explore our platform and find the right content for you.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Do you offer customer support?</Accordion.Header>
            <Accordion.Body>
              Yes! We offer 24/7 customer support to help with any issues or questions you may have.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
