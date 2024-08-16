import React from 'react';

function Privacy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">Your privacy is important to us. This policy outlines how we collect, use, and protect your information:</p>
      <ul className="list-disc ml-8 mb-4">
        <li>We collect personal information such as your name, email address, and payment details when you make a purchase.</li>
        <li>We use your information to process orders, improve our services, and communicate with you.</li>
        <li>Your data is stored securely and we do not share it with third parties without your consent, except as required by law.</li>
        <li>You have the right to access, update, or delete your personal information at any time.</li>
      </ul>
      <p className="mb-4">If you have any questions about our privacy practices, please contact us.</p>
    </div>
  );
}

export default Privacy;
