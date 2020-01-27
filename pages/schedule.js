import Layout from '../components/layout';
import About from '../components/home/about';
import MapBox from '../components/ui/mapBox';
import Hero from '../components/ui/hero';
import ScheduleWeek from '../components/ui/scheduleWeek';
import Banner from '../components/ui/banner';
import MeetOurTeam from '../components/ui/meetOurTeam/MeetOurTeam';
import Testimonies from '../components/ui/Testimonies/Testimonies';
import Carousell from '../components/ui/carousel/carousel';
import MembershipPlans from '../components/ui/membershipPlans/MembershipPlans';
import Schedule from '../components/ui/Schedule/Schedule';
import PersonalTrainerBanner from '../components/ui/PersonalTrainerBanner';

const schedule = () => (
  <Layout>
    <Hero img='/strenght.jpg' heroSize='calc(100vh - 40vh)'>
      <Banner bannerTitle='schedule' btnTwo='pricing' />
    </Hero>
    <Schedule />
    <ScheduleWeek />
    <MeetOurTeam />
    <PersonalTrainerBanner />
    <Testimonies />
    <MapBox />
    <Carousell />
  </Layout>
);

export default schedule;
