
import React, { useState } from 'react';

interface GetInvolvedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetInvolvedModal: React.FC<GetInvolvedModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    zip: '',
    phone: ''
  });

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${formData.firstName}! You've joined the movement.`);
    onClose();
  };

  // Brand button style: Navy bg, Yellow text, Yellow shadow, black weight, uppercase
  const brandButtonClass = "bg-brand-navy text-brand-yellow font-black uppercase tracking-widest shadow-[6px_6px_0px_0px_#e1bb23] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all border-2 border-brand-navy text-center";
  const inputStyle = "w-full p-4 bg-gray-50 border-2 border-gray-200 focus:border-brand-yellow outline-none font-bold uppercase tracking-widest text-sm text-brand-navy transition-all";

  return (
    <div className="fixed inset-0 z-[100] bg-white overflow-y-auto font-sans animate-in fade-in duration-500">
      <div className="min-h-screen w-full flex flex-col items-center justify-center relative p-4 md:p-10">
        
        {/* Close Button - Top Right */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-50 text-brand-navy/30 hover:text-brand-navy transition-colors p-2"
          aria-label="Close"
        >
          <svg className="w-8 h-8 md:w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="w-full max-w-[1400px] flex flex-col lg:flex-row items-stretch bg-white lg:shadow-[40px_40px_0px_0px_#f4f7fa] border-4 border-brand-navy overflow-hidden">
          
          {/* Left Column: Image Area */}
          <div className="w-full lg:w-1/2 relative bg-brand-navy flex items-end justify-center overflow-hidden min-h-[400px] lg:min-h-0">
            <img 
              src="http://quincyforcongress.zahidyaftali.com/wp-content/uploads/2026/02/Quincy-in-white-2_B3web-scaled.png" 
              alt="Quincy Bareebe" 
              className="w-full h-full object-contain object-bottom scale-110 lg:scale-125 translate-y-10 lg:translate-y-20 drop-shadow-2xl"
            />
            {/* DOM