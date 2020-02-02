import Layout from '../components/layout';
import Hero from '../components/ui/hero';
import ScheduleWeek from '../components/ui/scheduleWeek';
import Banner from '../components/ui/banner';
import MeetOurTeam from '../components/ui/meetOurTeam/MeetOurTeam';
import Testimonies from '../components/ui/Testimonies/Testimonies';
import MembershipPlans from '../components/ui/membershipPlans/MembershipPlans';
import ClassesContent from '../components/classes/ClassesContent';

const classes = () => (
  <Layout>
    <Hero img='/bars.jpg' heroSize='calc(100vh - 40vh)'>
      <Banner bannerTitle='classes' btnTwo='team' />
    </Hero>
    <ClassesContent />
    <MembershipPlans />
    <MeetOurTeam />
    <ScheduleWeek />
    <Testimonies />
  </Layout>
);

export default classes;
