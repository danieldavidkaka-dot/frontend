import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoEnded, setIsVideoEnded] = useState(false);

  useEffect(() => {
    // Fallback timer in case the video fails to load or play
    const timer = setTimeout(() => {
      if (!isVideoEnded) {
        setIsVideoEnded(true);
        onComplete();
      }
    }, 8000); 

    return () => clearTimeout(timer);
  }, [isVideoEnded, onComplete]);

  const handleVideoEnd = () => {
    setIsVideoEnded(true);
    onComplete();
  };

  return (
    <motion.div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0E1B3D]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <video 
        ref={videoRef}
        src="https://res.cloudinary.com/di0uempui/video/upload/v1774312542/INVODEX_es_la_marca_de_un_prod_ntdorx.mp4"
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="w-full h-full object-cover opacity-90"
      />
    </motion.div>
  );
};

export default Preloader;
