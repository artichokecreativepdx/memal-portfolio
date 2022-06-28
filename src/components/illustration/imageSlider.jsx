import Carousel, { CarouselItem } from '../carousel/carousel';
import './imageSlider.css';

import atlas from './illus/atlas_crop.jpg';
import emporor from './illus/emporor_crop.jpg';
import silk from './illus/silk_crop.jpg';
import lantern from './illus/lantern_crop.jpg';
import luna from './illus/luna_crop.jpg';
import sphinx from './illus/sphinx_crop.jpg';
import tiger from './illus/tiger_crop.jpg';
import anthrax from './illus/anthrax_crop.jpg';
import bears from './illus/bears_crop.jpg';
import electric from './illus/electric_crop.jpg';
import doll from './illus/doll_crop.jpg';
import woods from './illus/woods_crop.jpg';
import waitress from './illus/waitress_crop.jpg';
import birds from './illus/bird_crop.jpg';

function ImageSlider() {
  return (
    <section className="illusBox">
      <h2>Digital Illustrations</h2>
      <Carousel>
        <CarouselItem>
          <img src={lantern} alt="lantern bug" />
        </CarouselItem>
        <CarouselItem>
          <img src={luna} alt="luna moth" />
        </CarouselItem>
        <CarouselItem>
          <img src={sphinx} alt="sphinx moth" />
        </CarouselItem>
        <CarouselItem>
          <img src={tiger} alt="tiger moth" />
        </CarouselItem>
        <CarouselItem>
          <img src={silk} alt="silk moth" />
        </CarouselItem>
        <CarouselItem>
          <img src={atlas} alt="atlas moth" />
        </CarouselItem>
        <CarouselItem>
          <img src={emporor} alt="emporor moth" />
        </CarouselItem>
      </Carousel>

      <h2>Acrylic and Oil</h2>
      <Carousel>
        <CarouselItem>
          <img src={anthrax} alt="anthrax painting" />
        </CarouselItem>
        <CarouselItem>
          <img src={birds} alt="cicada painting" />
        </CarouselItem>
        <CarouselItem>
          <img src={bears} alt="bear painting" />
        </CarouselItem>
        <CarouselItem>
          <img src={electric} alt="electric painting" />
        </CarouselItem>
        <CarouselItem>
          <img src={doll} alt="doll painting" />
        </CarouselItem>
        <CarouselItem>
          <img src={woods} alt="woods painting" />
        </CarouselItem>
        <CarouselItem>
          <img src={waitress} alt="waitress painting" />
        </CarouselItem>
      </Carousel>
    </section>
  );
}
export default ImageSlider;
