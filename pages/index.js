import Layout from '../components/layout';
import About from '../components/home/about';
import MapBox from '../components/ui/mapBox';
import Contact from '../components/contact';
import Hero from '../components/ui/hero';
import ScheduleWeek from '../components/ui/scheduleWeek';
import Banner from '../components/ui/banner';
import Services from '../components/ui/Servicess/Services';
import Barbell from '../components/ui/Barbell';
import MeetOurTeam from '../components/ui/meetOurTeam/MeetOurTeam';
import MembershipPlans from '../components/ui/membershipPlans/MembershipPlans';
import Schedule from '../components/ui/Schedule/Schedule';
import PersonalTrainerBanner from '../components/ui/PersonalTrainerBanner';
import Testimonies from '../components/ui/Testimonies/Testimonies';
import Carousell from '../components/ui/carousel/carousel';

const IndexPage = () => (
  <Layout>
    <Hero>
      <Banner banner='home' />
    </Hero>
    <About />
    <ScheduleWeek />
    <hr />
    <Barbell addMg='4em auto' />
    <Services />
    <MeetOurTeam />
    <MembershipPlans />
    <Schedule />
    <PersonalTrainerBanner />
    <Testimonies />
    {/* <MapBox /> */}
    <Contact />
    <Carousell />
  </Layout>
);

export default IndexPage;
