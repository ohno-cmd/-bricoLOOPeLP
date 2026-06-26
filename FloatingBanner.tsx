import React, { useState, useEffect } from 'react';

interface FloatingBannerProps {
  onButtonClick?: () => void;
}

const FloatingBanner: React.FC<FloatingBannerProps> = ({ onButtonClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fade in animation on mount
    setIsVisible(true);
  }, []);

  const handleClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      // Default: scroll to offer section
      const offerSection = document.getElementById('offer-section');
      if (offerSection) {
        offerSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div
      className={`
        fixed bottom-0 left-0 right-0 z-50
        bg-gradient-to-r from-amber-50 to-orange-50
        border-t-2 border-orange-300
        shadow-2xl
        transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}
      `}
      style={{ maxHeight: '150px' }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4 sm:px-6 lg:px-8">
        {/* Desktop Layout (horizontal) */}
        <div className="hidden md:flex items-center justify-between gap-6">
          {/* Left: Product Image */}
          <div className="flex-shrink-0 w-24 h-24">
            <img
              src="/image/3set.png"
              alt="内臓3種セット"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Center: Text Content */}
          <div className="flex-1 min-w-0">
            <div className="text-amber-900 text-sm font-medium mb-1">
              内臓3種セット
            </div>
            <div className="text-2xl md:text-3xl font-bold text-amber-950">
              1日約<span className="text-orange-600">194円</span>で
            </div>
            <div className="text-lg md:text-xl font-semibold text-amber-900">
              愛犬が生まれ変わる
            </div>
          </div>

          {/* Right: Button */}
          <button
            onClick={handleClick}
            className={`
              flex-shrink-0 px-6 py-3
              bg-gradient-to-r from-orange-500 to-orange-600
              hover:from-orange-600 hover:to-orange-700
              text-white font-bold text-sm md:text-base
              rounded-full
              transition-all duration-200 ease-out
              hover:shadow-lg hover:-translate-y-0.5
              active:translate-y-0
              whitespace-nowrap
            `}
          >
            > まず1か月試してみる
          </button>
        </div>

        {/* Mobile Layout (vertical/compact) */}
        <div className="md:hidden flex flex-col gap-3">
          {/* Top: Product Image + Text */}
          <div className="flex items-start gap-3">
            {/* Product Image */}
            <div className="flex-shrink-0 w-16 h-16">
              <img
                src="/image/3set.png"
                alt="内臓3種セット"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Text Content */}
            <div className="flex-1 min-w-0 pt-1">
              <div className="text-amber-900 text-xs font-medium">
                内臓3種セット
              </div>
              <div className="text-lg font-bold text-amber-950 leading-tight">
                1日約<span className="text-orange-600">194円</span>で愛犬が生まれ変わる
              </div>
            </div>
          </div>

          {/* Bottom: Button */}
          <button
            onClick={handleClick}
            className={`
              w-full px-4 py-2.5
              bg-gradient-to-r from-orange-500 to-orange-600
              hover:from-orange-600 hover:to-orange-700
              text-white font-bold text-sm
              rounded-full
              transition-all duration-200 ease-out
              hover:shadow-lg hover:-translate-y-0.5
              active:translate-y-0
            `}
          >
            > まず1か月試してみる
          </button>
        </div>
      </div>

      {/* Decorative bottom border for extra polish */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-300 via-orange-400 to-orange-300 opacity-50"></div>
    </div>
  );
};

export default FloatingBanner;
