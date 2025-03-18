import React from 'react';
import { useNavigate } from 'react-router';

const ContactUsSection = () => {
  const navigate = useNavigate();
    return (
        <div className="mt-8 p-6 bg-gray-100 rounded-lg mb-12 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-semibold">Need More Information?</h2>
        <p className="mt-2 text-gray-600">Reach out to us for any travel inquiries.</p>
        <button onClick={() => navigate('/contact')} className="mt-4 px-4 py-2 cursor-pointer bg-tmt-prim text-white rounded-lg hover:bg-slate-700">
          Contact Us
        </button>
      </div>
   
    );
};

export default ContactUsSection;