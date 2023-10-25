// import React, { Fragment, useEffect, useRef, useState } from 'react';
// import classes from '../css/Carousel.module.css';
// import { motion } from 'framer-motion';

// import v1 from '../assets/SoundApp.mp4';
// import v2 from '../assets/PlantSale.mp4';
// import v3 from '../assets/capturePage.mp4';
// import v4 from '../assets/CSahrpEstoque.mp4';
// import v5 from '../assets/cat-typing-24.gif';
// import CarouselCard from './CarouselCard';

// const Carousel: React.FC = () => {
//   const [width, setWidth] = useState(0);
//   const [isSmallScreen, setisSmallScreen] = useState<boolean>(window.innerWidth < 390);
//   const carousel: any = useRef();

//   const projects: any[] = [v1, v2, v3, v4, v5];

//   useEffect(() => {
//     const SetWidth = async () => {
//     setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
//     console.log(width)
//     };    
//     SetWidth();
// }, []);

// useEffect(() => {
//   const handleResize = () => {
//       setisSmallScreen(window.innerWidth < 414);
//   };

//   window.addEventListener('resize', handleResize);

//   return () => {
//       window.removeEventListener('resize', handleResize);
//   };
// }, []);

// return (
//     <Fragment>
//       {isSmallScreen ? (
//         <motion.div ref={carousel} className={classes.carousel}>
//         <motion.div className={classes.inner}
//           drag="x"
//           dragConstraints={{ right: 0, left: - width }}
//           dragElastic={0.8}
//           initial={{ x: 0 }}
//           // animate={{ x: 0 }}
//           // transition={{ duration: 0.8}}
//           >
//             {projects.map(card => (
//               <motion.div className={classes.teste} key={Math.random()}>
//                   <CarouselCard card={card} />
//                 </motion.div>
//               ))}
//         </motion.div>
//       </motion.div>
//       ) : (
//       <motion.div ref={carousel} className={classes.carousel}>
//         <motion.div className={classes.inner}
//           drag="x"
//           dragConstraints={{ right: 900, left: - width }}
//           dragElastic={0.8}
//           initial={{ x: 900 }}
//           >
//             {projects.map(card => (
//               <motion.div className={classes.teste} key={Math.random()}>
//                   <CarouselCard card={card} />
//                 </motion.div>
//               ))}
//         </motion.div>
//       </motion.div>
//       )}
//       </Fragment>
//     );
// };
// export default Carousel;

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
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(window.innerWidth < 390);
  const [isMediumScreen, setIsMediumScreen] = useState<boolean>(window.innerWidth >= 390 && window.innerWidth <= 415);
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(window.innerWidth > 415);
  const carousel: any = useRef();

  const projects: any[] = [v1, v2, v3, v4, v5];

  useEffect(() => {
    const SetWidth = async () => {
      setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
      console.log(width);
    };    
    SetWidth();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setIsSmallScreen(windowWidth < 390);
      setIsMediumScreen(windowWidth >= 390 && windowWidth <= 415);
      setIsLargeScreen(windowWidth > 415);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Fragment>
      {isSmallScreen && (
        <motion.div ref={carousel} className={classes.carousel}>
          <motion.div className={classes.inner}
            drag="x"
            dragConstraints={{ right: 0, left: - width }}
            dragElastic={0.8}
            initial={{ x: 0 }}
            >
              {projects.map(card => (
                <motion.div className={classes.teste} key={Math.random()}>
                    <CarouselCard card={card} />
                </motion.div>
                ))}
          </motion.div>
        </motion.div>
      )}

      {isMediumScreen && (
        <motion.div ref={carousel} className={classes.carousel}>
          {/* ... Renderização para telas entre 391 e 415 */}
          <motion.div className={classes.inner}
            drag="x"
            dragConstraints={{ right: 100, left: - width }}
            dragElastic={0.8}
            initial={{ x: 50 }}
            >
              {projects.map(card => (
                <motion.div className={classes.teste} key={Math.random()}>
                    <CarouselCard card={card} />
                </motion.div>
                ))}
          </motion.div>
        </motion.div>
      )}
          {/* ... Renderização para telas maiores que 415 */}
      {isLargeScreen && (
        <motion.div ref={carousel} className={classes.carousel}>
          <motion.div className={classes.inner}
            drag="x"
            dragConstraints={{ right: 900, left: - width }}
            dragElastic={0.8}
            initial={{ x: 900 }}
            >
              {projects.map(card => (
                <motion.div className={classes.teste} key={Math.random()}>
                    <CarouselCard card={card} />
                </motion.div>
                ))}
          </motion.div>
        </motion.div>
      )}
    </Fragment>
  );
};

export default Carousel;
