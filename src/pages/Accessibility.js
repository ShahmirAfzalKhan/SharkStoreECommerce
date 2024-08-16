import React from 'react';

function Accessibility() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Accessibility Statement</h1>
      <p className="mb-4">We are committed to ensuring that our website is accessible to all users, including those with disabilities. Here’s what we’re doing to improve accessibility:</p>
      <ul className="list-disc ml-8 mb-4">
        <li>We follow the Web Content Accessibility Guidelines (WCAG) 2.1 to ensure our site is usable for everyone.</li>
        <li>We regularly review and update our website to improve accessibility.</li>
        <li>We offer alternative text for images and ensure all content is navigable by keyboard.</li>
        <li>If you encounter any accessibility issues, please contact us so we can address them promptly.</li>
      </ul>
      <p className="mb-4">Your feedback is valuable in helping us make our site accessible to everyone. Thank you for visiting!</p>
    </div>
  );
}

export default Accessibility;
