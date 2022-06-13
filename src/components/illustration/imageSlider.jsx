import { Segment, Image } from 'semantic-ui-react';
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
    <Segment className="illusBox">
      <h2>Digital Illustrations</h2>
      <Carousel>
        <CarouselItem>
          <Image src={lantern} alt="lantern bug" />
        </CarouselItem>
        <CarouselItem>
          <Image src={luna} alt="luna moth" />
        </CarouselItem>
        <CarouselItem>
          <Image src={sphinx} alt="sphinx moth" />
        </CarouselItem>
        <CarouselItem>
          <Image src={tiger} alt="tiger moth" />
        </CarouselItem>
        <CarouselItem>
          <Image src={silk} alt="silk moth" />
        </CarouselItem>
        <CarouselItem>
          <Image src={atlas} alt="atlas moth" />
        </CarouselItem>
        <CarouselItem>
          <Image src={emporor} alt="emporor moth" />
        </CarouselItem>
      </Carousel>

      <h2>Acrylic and Oil</h2>
      <Carousel>
        <CarouselItem>
          <Image src={anthrax} alt="anthrax painting" />
        </CarouselItem>
        <CarouselItem>
          <Image src={birds} alt="cicada painting" />
        </CarouselItem>
        <CarouselItem>
          <Image src={bears} alt="bear painting" />
        </CarouselItem>
        <CarouselItem>
          <Image src={electric} alt="electric painting" />
        </CarouselItem>
        <CarouselItem>
          <Image src={doll} alt="doll painting" />
        </CarouselItem>
        <CarouselItem>
          <Image src={woods} alt="woods painting" />
        </CarouselItem>
        <CarouselItem>
          <Image src={waitress} alt="waitress painting" />
        </CarouselItem>
      </Carousel>
    </Segment>
  );
}
export default ImageSlider;
