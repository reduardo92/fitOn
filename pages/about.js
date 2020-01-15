import Layout from '../components/layout';
import ImgBanner from '../components/ui/imgBanner';
import MapBox from '../components/ui/mapBox';
import Carousell from '../components/ui/carousel/carousel';
import GridTwo from '../components/ui/gridTwo';
import Qoute from '../components/ui/qoute';

const about = () => (
  <Layout
    banner='about'
    heroImg='/outisde.jpg'
    titleImg='/aboutTitle.svg'
    heroOpacity='rgba(0, 0, 0, 0.85)'
  >
    <ImgBanner
      img='/patio.jpg'
      title='MENU'
      subtile='SEE WHAT WE OFFER'
      btnTitle='view more'
      toLink='/menu'
    />
    <GridTwo className='mr-a max-width'>
      <Qoute />
    </GridTwo>
    <Carousell />
    <MapBox />
  </Layout>
);

export default about;
