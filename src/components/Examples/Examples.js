import React from 'react';
import { useState } from 'react';
import './Examples.css';
import { motion } from "framer-motion";
import image1 from '../../assets/1.jpg';
import image2 from '../../assets/2.jpg';
import image3 from '../../assets/3.jpg';
import image4 from '../../assets/4.jpg';
import image5 from '../../assets/5.jpg';
import image6 from '../../assets/6.jpg';

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

function Examples() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
  
    return (
      <section>
        <motion.div
          initial={false}
          animate={
            isLoaded && isInView
              ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
              : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
          }
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          onViewportEnter={() => setIsInView(true)}
        >
        <div className='example'>
            <img src={image1} alt="" width="400px" height="450px" className="hover-grow" onLoad={() => setIsLoaded(true)} />
            <img src={image2} alt="" width="400px" height="450px" className="hover-grow" onLoad={() => setIsLoaded(true)} />
            <img src={image3} alt="" width="400px" height="450px" className="hover-grow" onLoad={() => setIsLoaded(true)} />
            <img src={image4} alt="" width="400px" height="450px" className="hover-grow" onLoad={() => setIsLoaded(true)} />
            <img src={image5} alt="" width="400px" height="450px" className="hover-grow" onLoad={() => setIsLoaded(true)} />
            <img src={image6} alt="" width="400px" height="450px" className="hover-grow" onLoad={() => setIsLoaded(true)} />
        </div>
        </motion.div>
      </section>
    );
}

export default Examples;