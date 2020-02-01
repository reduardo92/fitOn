import Layout from '../components/layout';
import Hero from '../components/ui/hero';
import ScheduleWeek from '../components/ui/scheduleWeek';
import Banner from '../components/ui/banner';
import MeetOurTeam from '../components/ui/meetOurTeam/MeetOurTeam';
import PersonalTrainerBanner from '../components/ui/PersonalTrainerBanner';
import Testimonies from '../components/ui/Testimonies/Testimonies';
import Carousell from '../components/ui/carousel/carousel';
import AboutContent from '../components/about/AboutContent';

const about = () => (
  <Layout>
    <Hero img='/secondBg.jpg' heroSize='calc(100vh - 40vh)'>
      <Banner bannerTitle='about' btnTwo='classes' />
    </Hero>
    <AboutContent />
    <ScheduleWeek />
    <Testimonies />
    <PersonalTrainerBanner />
    <MeetOurTeam />
    <Carousell />
  </Layout>
);

export default about;
