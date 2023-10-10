import { useRef } from 'react';
import classes from '../css/CarouselCard.module.css';

interface projectsProps {
  card: string;
}

const CarouselCard: React.FC<projectsProps>= ( { card } ) => {

  const videoRef = useRef<HTMLVideoElement>(null);

    const handleMouseEnter = () => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }

    const isVideo = card.endsWith('.mp4');

  return (
    <div>
        <div className={classes.container}>
          {isVideo ? (
            <video className={classes.video}
            ref={videoRef}
            onMouseEnter={handleMouseEnter}
            onMouseOver={handleMouseEnter}
            src={card}
            typeof='video/mp4'></video>
          ) : (
            <img className={classes.picGif}
                src={card}
                alt="algum projeto web em gif"/>
          )
        }
        </div>
      <p className={classes.roll}>-</p>
    </div>
  )
};

export default CarouselCard;