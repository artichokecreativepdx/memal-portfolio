import { Container, Segment, Image, Grid } from 'semantic-ui-react';

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
    <Container>
      <Grid stackable columns={3}>
        <Grid.Row>
          <Grid.Column>
            <Segment>
              <Image
                src={lantern}
                className="img-fluid"
                centered
                alt="lantern bug"
              />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <Image
                src={luna}
                className="img-fluid"
                centered
                alt="luna moth"
              />
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <Segment>
              <Image
                src={sphinx}
                className="img-fluid"
                centered
                alt="sphinx moth"
              />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <Image
                src={tiger}
                className="img-fluid"
                centered
                alt="tiger moth"
              />
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <Segment>
              <Image
                src={silk}
                className="img-fluid"
                centered
                alt="silk moth"
              />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <Image
                src={atlas}
                className="img-fluid"
                centered
                alt="atlas moth"
              />
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <Segment>
              <Image
                src={emporor}
                className="img-fluid"
                centered
                alt="emporor moth"
              />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <Image
                src={anthrax}
                className="img-fluid"
                centered
                alt="anthrax painting"
              />
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <Segment>
              <Image
                src={birds}
                className="img-fluid"
                centered
                alt="cicada painting"
              />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <Image
                src={bears}
                className="img-fluid"
                centered
                alt="bear painting"
              />
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <Segment>
              <Image
                src={electric}
                className="img-fluid"
                centered
                alt="electric painting"
              />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <Image
                src={doll}
                className="img-fluid"
                centered
                alt="doll painting"
              />
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <Segment>
              <Image
                src={woods}
                className="img-fluid"
                centered
                alt="woods painting"
              />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <Image
                src={waitress}
                className="img-fluid"
                centered
                alt="waitress painting"
              />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}
export default ImageSlider;
