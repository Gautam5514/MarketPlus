

const ContactUs = () => {
    return (
        <div className="container my-5 text-dark">
            <h1 className="text-center mb-4">Contact Us</h1>
            <p className="lead text-center mb-5">
                We would love to hear from you! Please fill out the form below or reach us through our contact details.
            </p>

            <div className="row">
                <div className="col-md-6 mb-4">
                    <h2>Get in Touch</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Your Name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Your Email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="4" placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>

                <div className="col-md-6 mb-4">
                    <h2>Contact Information</h2>
                    <p><strong>Email:</strong> support@example.com</p>
                    <p><strong>Phone:</strong> +1 (234) 567-8901</p>
                    <p><strong>Address:</strong> Anantdih , Koderma, India</p>
                    <h5>Follow Us</h5>
                    <div>
                        <a href="#" className="me-3"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#" className="me-3"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
