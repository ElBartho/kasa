import { SlideShowWrapper, ArrowImage, BackgroundIndex } from './slideshow';
import ArrowForward from '../../assets/arrowForward.svg';
import ArrowBackward from '../../assets/arrowBackward.svg';
import { useEffect, useState } from 'react';

const SlideShow = ({ imagesArray }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMulitple, setIsMultiple] = useState(false);

  useEffect(() => {
    if (imagesArray && imagesArray.length > 1) {
      setIsMultiple(true);
    }
  }, [imagesArray]);

  const goToNextSlide = () => {
    if (currentSlide === imagesArray.length - 1) {
      setCurrentSlide(0);
      return;
    }
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

  const goToPrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(imagesArray.length - 1);
      return;
    }
    setCurrentSlide((prevSlide) => prevSlide - 1);
  };

  return (
    <>
      {imagesArray && (
        <SlideShowWrapper slide={imagesArray[currentSlide]}>
          {isMulitple && (
            <>
              <ArrowImage
                src={ArrowBackward}
                alt='backward arrow'
                onClick={() => goToPrevSlide()}
                $back
              />
              <ArrowImage
                src={ArrowForward}
                alt='forward arrow'
                onClick={() => goToNextSlide()}
                $front
              />
              <BackgroundIndex>{`${currentSlide + 1}/${
                imagesArray.length
              }`}</BackgroundIndex>
            </>
          )}
        </SlideShowWrapper>
      )}
    </>
  );
};

export default SlideShow;
