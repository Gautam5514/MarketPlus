

const ReturnPolicy = () => {
    return (
        <div className="container my-5 text-dark">
            <h1 className="text-center mb-4">Return Policy</h1>
            <p className="lead text-center mb-5">
                We strive to ensure our customers are satisfied with their purchases. If you're not completely happy with your order, we’re here to help!
            </p>

            <div className="mb-4">
                <h2>1. Return Period</h2>
                <p>You have 30 days from the date of delivery to initiate a return. Items must be unused and in the original packaging to qualify for a return.</p>
            </div>

            <div className="mb-4">
                <h2>2. Items Eligible for Return</h2>
                <p>The following items are eligible for return:</p>
                <ul className="list-unstyled">
                    <li><strong>Clothing and Accessories:</strong> Must be unworn, unwashed, and with tags attached.</li>
                    <li><strong>Electronics:</strong> Must be in original packaging with all accessories included.</li>
                    <li><strong>Beauty Products:</strong> Must be unopened and in their original packaging.</li>
                </ul>
            </div>

            <div className="mb-4">
                <h2>3. Non-Returnable Items</h2>
                <p>Unfortunately, certain items cannot be returned:</p>
                <ul className="list-unstyled">
                    <li>Gift cards</li>
                    <li>Downloadable software products</li>
                    <li>Some health and personal care items</li>
                </ul>
            </div>

            <div className="mb-4">
                <h2>4. How to Initiate a Return</h2>
                <p>To initiate a return, please follow these steps:</p>
                <ol>
                    <li>Contact our customer service at <strong>support@market.com</strong> with your order number and reason for return.</li>
                    <li>We will provide you with a return authorization and shipping instructions.</li>
                    <li>Pack the item securely in its original packaging and include all paperwork.</li>
                    <li>Ship the item back to the address provided in the return instructions.</li>
                </ol>
            </div>

            <div className="mb-4">
                <h2>5. Refund Process</h2>
                <p>Once we receive and inspect your returned item, we will notify you about the status of your refund:</p>
                <ul className="list-unstyled">
                    <li>If approved, your refund will be processed within 7-10 business days and credited to your original method of payment.</li>
                    <li>If rejected, we will contact you with the reason and you may choose to have the item shipped back to you.</li>
                </ul>
            </div>

            <div className="mb-4">
                <h2>6. Exchanges</h2>
                <p>If you would like to exchange an item, please follow the return process above and place a new order for the desired item.</p>
            </div>

            <p className="text-center">
                Thank you for shopping with us! If you have any questions regarding our return policy, feel free to reach out to our support team.
            </p>
        </div>
    );
};

export default ReturnPolicy;
