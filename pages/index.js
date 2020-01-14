import Layout from '../components/layout';
import About from '../components/home/about';
import MapBox from '../components/ui/mapBox';
import Contact from '../components/contact';
import Carousell from '../components/ui/carousel/carousel';
import Hero from '../components/ui/hero';
import hero from '../components/ui/hero';
import TitleBanner from '../components/ui/titleBanner';
import ScheduleWeek from '../components/ui/scheduleWeek';
import Banner from '../components/ui/banner';
import Services from '../components/ui/Servicess/Services';
import Barbell from '../components/ui/Barbell';

const IndexPage = () => (
  <Layout>
    <Hero>
      <Banner banner='home' />
    </Hero>
    <About />
    <ScheduleWeek />
    <hr />
    <Barbell />
    <Services />
    <MapBox />
    <Contact />
    {/* <Carousell /> */}
  </Layout>
);

export default IndexPage;
