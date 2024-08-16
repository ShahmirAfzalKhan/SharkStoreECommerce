import React from 'react';

function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="text-sm mb-4">If you have any questions or need assistance, feel free to reach out to us using the form below or through our contact information.</p>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
          <input type="text" id="name" className="w-full p-2 border rounded-md" placeholder="Your Name" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
          <input type="email" id="email" className="w-full p-2 border rounded-md" placeholder="Your Email" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
          <textarea id="message" className="w-full p-2 border rounded-md" rows="4" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md">Send Message</button>
      </form>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Our Contact Information</h2>
        <p className="text-sm">You can also reach us at:</p>
        <p className="text-sm">Email: support@sharkstore.com</p>
        <p className="text-sm">Phone: +123 456 7890</p>
        <p className="text-sm">Address: 123 Anime Street, Tokyo, Japan</p>
      </div>
    </div>
  );
}

export default Contact;
