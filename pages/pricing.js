import Layout from '../components/layout';
import Hero from '../components/ui/hero';
import ScheduleWeek from '../components/ui/scheduleWeek';
import Banner from '../components/ui/banner';
import MeetOurTeam from '../components/ui/meetOurTeam/MeetOurTeam';
import PersonalTrainerBanner from '../components/ui/PersonalTrainerBanner';
import Testimonies from '../components/ui/Testimonies/Testimonies';
import PricingContent from '../components/pricing/PricingContent';

const pricing = () => (
  <Layout>
    <Hero img='/roomGym.jpg' heroSize='calc(100vh - 40vh)'>
      <Banner bannerTitle='pricing' btnTwo='contact' />
    </Hero>
    <PricingContent />
    <ScheduleWeek />
    <MeetOurTeam />
    <PersonalTrainerBanner />
    <Testimonies />
  </Layout>
);

export default pricing;
