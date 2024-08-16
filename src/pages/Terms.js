import React from 'react';

function Terms() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Terms of Service</h1>
      <p className="mb-4">Welcome to Shark Store. By using our website, you agree to comply with and be bound by the following terms and conditions:</p>
      <ul className="list-disc ml-8 mb-4">
        <li>All content provided on this site is for informational purposes only.</li>
        <li>We reserve the right to modify or discontinue any part of our service at any time.</li>
        <li>Users are responsible for maintaining the confidentiality of their account and password.</li>
        <li>All sales are final. Please review our return policy for more details.</li>
      </ul>
      <p className="mb-4">By continuing to use our services, you agree to accept any changes to these terms. If you have any questions, please contact us.</p>
    </div>
  );
}

export default Terms;