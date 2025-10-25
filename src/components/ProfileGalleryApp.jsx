import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, HelpCircle, Plus, Grid } from 'lucide-react';

const ProfileGalleryApp = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedImage, setExpandedImage] = useState(null);
  const [images, setImages] = useState([
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1618556450967-e7e5c6f3e825?w=800&h=600&fit=crop'
  ]);
  
  const fileInputRef = useRef(null);
  
  const tabs = [
    { id: 'about', label: 'About Me' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'recommended', label: 'Recommended' }
  ];

  const content = {
    about: "Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.\n\nI was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...",
    experiences: "Throughout my career at Salesforce, I've had the opportunity to work with incredible clients and close deals worth millions. I specialize in enterprise solutions and have been consistently ranking in the top 10% of sales representatives.\n\nMy approach focuses on understanding client needs deeply and providing tailored solutions that drive real business value. I believe in building long-term relationships rather than just closing deals.",
    recommended: "I highly recommend checking out our latest CRM features that can transform your sales pipeline. The automation tools have been game-changers for teams looking to scale efficiently.\n\nAlso, if you're interested in sales methodologies, I suggest reading 'The Challenger Sale' and attending our quarterly webinars on modern sales strategies."
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? Math.max(0, images.length - 3) : Math.max(0, prev - 1)));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev >= images.length - 3 ? 0 : Math.min(images.length - 3, prev + 1)));
  };

  const handleAddImage = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImages([...images, event.target.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = (idx) => {
    setExpandedImage(expandedImage === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex">
      {/* Left Empty Section - Responsive */}
      <div className="hidden lg:block lg:w-1/2"></div>
      
      {/* Right Content Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start p-8 lg:p-12 space-y-8">
        
        {/* Profile Widget */}
        <div className="w-full max-w-2xl bg-slate-800/50 backdrop-blur-md rounded-3xl shadow-2xl shadow-slate-900/50 p-8 relative border border-slate-700/30 hover:shadow-slate-700/20 hover:shadow-3xl transition-all duration-500">
          {/* Help Icon */}
          <div className="absolute top-6 left-6 group cursor-pointer">
            <div className="w-6 h-6 bg-slate-700/50 rounded-full flex items-center justify-center group-hover:bg-slate-600/70 group-hover:shadow-lg group-hover:shadow-slate-500/30 transition-all duration-300">
              <HelpCircle className="w-4 h-4 text-slate-400 group-hover:text-slate-200 transition-colors duration-300" />
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8 bg-slate-950 rounded-3xl p-2 shadow-inner">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-8 py-4 rounded-2xl text-base font-medium transition-all duration-300 relative ${
                  activeTab === tab.id
                    ? 'bg-slate-800 text-white shadow-lg shadow-slate-700/50'
                    : 'bg-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'
                }`}
                style={{
                  boxShadow: activeTab === tab.id ? '0 0 20px rgba(100, 116, 139, 0.3)' : 'none'
                }}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-slate-600/20 to-slate-700/20 animate-pulse"></div>
                )}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="relative max-h-64 overflow-hidden bg-slate-900/20 rounded-2xl p-6 border border-slate-700/20">
            <p className="text-slate-300 text-base leading-relaxed whitespace-pre-line">
              {content[activeTab]}
            </p>
            {/* Fade effect at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-800/50 to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Separator */}
        <div className="w-full max-w-2xl">
          <div className="h-1 bg-gradient-to-r from-transparent via-slate-700/50 to-transparent rounded-full shadow-lg shadow-slate-700/20"></div>
        </div>

        {/* Gallery Widget */}
        <div className="w-full max-w-2xl bg-slate-800/50 backdrop-blur-md rounded-3xl shadow-2xl shadow-slate-900/50 p-8 border border-slate-700/30 hover:shadow-slate-700/20 hover:shadow-3xl transition-all duration-500">
          {/* Help Icon */}
          <div className="absolute group cursor-pointer">
            <div className="w-6 h-6 bg-slate-700/50 rounded-full flex items-center justify-center -ml-8 group-hover:bg-slate-600/70 group-hover:shadow-lg group-hover:shadow-slate-500/30 transition-all duration-300">
              <HelpCircle className="w-4 h-4 text-slate-400 group-hover:text-slate-200 transition-colors duration-300" />
            </div>
          </div>

          {/* Gallery Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="bg-slate-950 px-8 py-3 rounded-3xl shadow-inner border border-slate-800">
              <h2 className="text-white text-lg font-medium">Gallery</h2>
            </div>
            
            <div className="flex items-center space-x-4">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
              />
              <button
                onClick={handleAddImage}
                className="bg-slate-700/60 hover:bg-slate-600/80 text-white px-6 py-2 rounded-3xl text-sm font-medium transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-slate-500/50 hover:shadow-xl hover:scale-105 border border-slate-600/30"
                style={{
                  boxShadow: '0 4px 20px rgba(71, 85, 105, 0.3)'
                }}
              >
                <Plus className="w-4 h-4" />
                <span>ADD IMAGE</span>
              </button>
              
              <button
                onClick={handlePrevImage}
                disabled={currentImageIndex === 0}
                className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-slate-500/50 disabled:opacity-50 disabled:cursor-not-allowed border border-slate-500/30"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              
              <button
                onClick={handleNextImage}
                disabled={currentImageIndex >= images.length - 3}
                className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-slate-500/50 disabled:opacity-50 disabled:cursor-not-allowed border border-slate-500/30"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="flex items-center space-x-4">
            {/* Grid Icon */}
            <div className="flex-shrink-0">
              <Grid className="w-6 h-6 text-slate-500" />
            </div>
            
            {/* Images */}
            <div className="flex space-x-4 overflow-hidden">
              {images.slice(currentImageIndex, currentImageIndex + 3).map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => handleImageClick(idx)}
                  className={`flex-1 aspect-[4/3] rounded-2xl overflow-hidden shadow-lg cursor-pointer group relative transition-all duration-500 ${
                    expandedImage === idx 
                      ? 'scale-150 z-50 border-4 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.8)]' 
                      : 'border-2 border-transparent hover:border-cyan-400/70 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]'
                  }`}
                  style={{
                    boxShadow: expandedImage === idx 
                      ? '0 0 40px rgba(34, 211, 238, 0.8), 0 20px 60px rgba(0, 0, 0, 0.6)' 
                      : '0 4px 20px rgba(0, 0, 0, 0.3)',
                    transform: expandedImage === idx ? 'scale(1.5)' : 'scale(1)'
                  }}
                >
                  <img
                    src={img}
                    alt={`Gallery ${currentImageIndex + idx + 1}`}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      expandedImage === idx 
                        ? 'brightness-100' 
                        : 'group-hover:scale-105 group-hover:brightness-110'
                    }`}
                  />
                  {/* Hover Glow Effect - Only when not expanded */}
                  {expandedImage !== idx && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(34,211,238,0)] group-hover:shadow-[inset_0_0_30px_rgba(34,211,238,0.4)] transition-all duration-300 rounded-2xl"></div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileGalleryApp;