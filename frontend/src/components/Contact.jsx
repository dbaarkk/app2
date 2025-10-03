import React from 'react';
import { Button } from './ui/button';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import { brandInfo } from '../mock';

const Contact = () => {
  const handleEmailClick = () => {
    const subject = encodeURIComponent('OBSY Hoodie Inquiry');
    const body = encodeURIComponent('Hello OBSY Team,\n\nI am interested in your hoodie collection and would like to get in touch.\n\nThank you!');
    window.location.href = `mailto:${brandInfo.contact}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-8 pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-white">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold tracking-wider mb-6">
              CONTACT
            </h1>
            <p className="text-xl text-gray-300">
              Get in touch with the OBSY team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-10">
              <h2 className="text-3xl font-bold mb-6 text-center">Reach Out</h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail size={24} className="text-gray-300" />
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <p className="text-lg font-semibold">{brandInfo.contact}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <MessageCircle size={24} className="text-gray-300" />
                  <div>
                    <p className="text-gray-300 text-sm">Support</p>
                    <p className="text-lg font-semibold">24/7 Customer Care</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone size={24} className="text-gray-300" />
                  <div>
                    <p className="text-gray-300 text-sm">Response Time</p>
                    <p className="text-lg font-semibold">Within 24 Hours</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-10">
              <h2 className="text-3xl font-bold mb-6 text-center">Quick Contact</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 text-sm mb-2">Your Email</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white focus:border-opacity-50"
                    disabled
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm mb-2">Subject</label>
                  <input 
                    type="text" 
                    placeholder="What can we help you with?"
                    className="w-full bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white focus:border-opacity-50"
                    disabled
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm mb-2">Message</label>
                  <textarea 
                    rows="4" 
                    placeholder="Tell us more..."
                    className="w-full bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white focus:border-opacity-50"
                    disabled
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button
              onClick={handleEmailClick}
              className="bg-white hover:bg-gray-100 text-black font-bold py-4 px-12 rounded-full text-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Mail className="mr-3" size={24} />
              COMPOSE EMAIL TO OBSY
            </Button>
            
            <p className="text-gray-400 text-sm mt-4">
              Click to open your email client with a pre-filled message
            </p>
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-10">
              <h3 className="text-2xl font-bold mb-4">Customer Care</h3>
              <p className="text-gray-300 leading-relaxed">
                Our dedicated support team is here to assist you with any questions about our hoodies, 
                sizing, orders, or returns. We're passionate about providing exceptional customer service 
                and ensuring your OBSY experience exceeds expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;