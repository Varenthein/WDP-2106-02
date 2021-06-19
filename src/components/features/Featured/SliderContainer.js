import React from 'react';
import Slider from './Slider';
const SliderContainer = (props) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [active, setActive] = React.useState(false);
  const slides = [
    {
      id: 1,
      title: 'save up to 50% of all furniture',
      link: 'https://images.pexels.com/photos/7333831/pexels-photo-7333831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 2,
      title: 'save up to 10% of outside furniture',
      link: 'https://images.pexels.com/photos/2318005/pexels-photo-2318005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 3,
      title: 'Buy 3 get 1 free',
      link: 'https://images.pexels.com/photos/518213/pexels-photo-518213.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
  ];
  const slideNext = (e) => {
    setTimeout(() => {
      setActive(() =>{
        return !active;
      });
      setCurrentSlide((prev) => {
        return prev + 1 === slides.length ? 0 : currentSlide + 1;
      });
      
    }, 0);
    setTimeout(() => {
      setActive(() =>{
        return active;
      });
    }, 400);
  };
  const slidePrev = (e) => {
    
    setTimeout(() => {
      setActive(() =>{
        return !active;
      });
      setCurrentSlide((prev) => {
        return prev === 0 ? slides.length - 1 : currentSlide - 1;
      });
    }, 0);
      
    setTimeout(() => {
      setActive(() =>{
        return active;
      });
    }, 600);
  };

  return (
    <React.Fragment>
      <Slider
        image={slides[currentSlide]}
        slideNext={slideNext}
        slidePrev={slidePrev}
        isActive={active}
      />
    </React.Fragment>
  );
};

export default SliderContainer;