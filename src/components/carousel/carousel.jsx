import React from 'react';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import './carousel.css';

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <section className="carousel-segment">
      <div className="carousel" {...handlers}>
        <div className="indicators">
          <button
            className="butnArrow"
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
          >
            <ion-icon name="arrow-back" size="large"></ion-icon>
          </button>

          <button
            className="butnArrow"
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
          >
            <ion-icon name="arrow-forward" size="large"></ion-icon>
          </button>
        </div>
        <div
          className="inner"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(child, { width: '100%' });
          })}
        </div>
      </div>
    </section>
  );
};
export default Carousel;
