import React, { Fragment, useEffect, useRef, useState } from 'react';
import classes from '../css/Carousel.module.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import v1 from '../assets/SoundApp.mp4';
import v2 from '../assets/PlantSale.mp4';
import v3 from '../assets/capturePage.mp4';
import v4 from '../assets/CSahrpEstoque.mp4';
import v5 from '../assets/cat-typing-24.gif';
import CarouselCard from './CarouselCard';

const Carousel: React.FC = () => {
  const [width, setWidth] = useState(0);
  const carousel: any = useRef();
  const [isCarouselVisible, setIsCarouselVisible] = useState(false);

  const projects: any[] = [v1, v2, v3, v4, v5];
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
      setWidth(carousel.current ? carousel.current.scrollWidth - carousel.current.offsetWidth : 0);
  }, []);

  useEffect(() => {
    setIsCarouselVisible(inView);
  }, [inView]);

  return (
    <Fragment>
      <div ref={(node) => { ref(node); carousel.current = node; }} className={classes.carousel}>
        <motion.div
          className={classes.inner}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 200 }}
          animate={{ x: isCarouselVisible ? 0 : 200 }}
          transition={{ duration: 0.6 }}
        >
          {isCarouselVisible &&
            projects.map((card) => {
              return (
                <motion.div key={Math.random()}>
                  <CarouselCard card={card} />
                </motion.div>
              );
            })}
        </motion.div>
      </div>
    </Fragment>
  );
};

export default Carousel;

