import React from 'react';
import { useState } from 'react';
import './Examples.css';
import { motion } from "framer-motion";

const image1 = '/assets/1.jpg';
const image2 = '/assets/2.jpg';
const image3 = '/assets/3.jpg';
const image4 = '/assets/4.jpg';
const image5 = '/assets/5.jpg';
const image6 = '/assets/6.jpg';

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