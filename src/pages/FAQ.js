import React from 'react';

function FAQ() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold">What is the return policy?</h2>
          <p className="text-sm">We offer a 30-day return policy for items in new condition. If you're not satisfied with your purchase, please contact our support team for assistance.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Do you ship internationally?</h2>
          <p className="text-sm">Yes, we ship worldwide. Shipping costs and delivery times may vary depending on your location.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">How can I track my order?</h2>
          <p className="text-sm">Once your order is shipped, you will receive a tracking number via email. You can use this number to track your order on our website or the carrier's website.</p>
        </div>
      </div>
    </div>
  );
}

export default FAQ;