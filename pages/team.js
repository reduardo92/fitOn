import Layout from '../components/layout';
import Hero from '../components/ui/hero';
import Banner from '../components/ui/banner';
import MeetOurTeam from '../components/ui/meetOurTeam/MeetOurTeam';
import Testimonies from '../components/ui/Testimonies/Testimonies';
import MembershipPlans from '../components/ui/membershipPlans/MembershipPlans';
import Carousell from '../components/ui/carousel/carousel';

const team = () => (
  <Layout>
    <Hero img='/person-carrying.jpg' heroSize='calc(100vh - 40vh)'>
      <Banner bannerTitle='team' btnTwo='pricing' />
    </Hero>
    <MeetOurTeam teamHome />
    <MembershipPlans />
    <Testimonies />
    <Carousell />
  </Layout>
);

export default team;
