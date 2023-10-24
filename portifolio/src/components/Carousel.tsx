import React, { Fragment, useEffect, useRef, useState } from 'react';
import classes from '../css/Carousel.module.css';
import { motion } from 'framer-motion';

import v1 from '../assets/SoundApp.mp4';
import v2 from '../assets/PlantSale.mp4';
import v3 from '../assets/capturePage.mp4';
import v4 from '../assets/CSahrpEstoque.mp4';
import v5 from '../assets/cat-typing-24.gif';
import CarouselCard from './CarouselCard';

const Carousel: React.FC = () => {
  const [width, setWidth] = useState(0);
  const carousel: any = useRef();

  const projects: any[] = [v1, v2, v3, v4, v5];

  useEffect(() => {
    const SetWidth = async () => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    console.log(width)
    };    
    SetWidth();
}, []);

return (
    <Fragment>
      <motion.div ref={carousel} className={classes.carousel}>
        <motion.div className={classes.inner}
          drag="x"
          dragConstraints={{ right: 850, left: - 900 }}
          dragElastic={0.8}
          initial={{ x: 800 }}
          >
            {projects.map(card => (
                <motion.div className={classes.teste} key={Math.random()}>
                  <CarouselCard card={card} />
                </motion.div>
              ))}
        </motion.div>
      </motion.div>
    </Fragment>
  );
};

export default Carousel;

