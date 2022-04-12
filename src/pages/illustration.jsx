//
import '../components/illustration/imageSlider';
import './illustration.css';
import ImageSlider from '../components/illustration/imageSlider';
import { Grid } from 'semantic-ui-react';

function Illustration() {
  return (
    <Grid stackable padded columns={2}>
      <div className="section_title_illustration">Illustration</div>

      <ImageSlider />
    </Grid>
  );
}
export default Illustration;
