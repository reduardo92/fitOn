import Layout from '../../components/layout';
import trainers from '../../components/ui/meetOurTeam/trainers';
import Button from '../../components/ui/button';
import Fade from 'react-reveal/Fade';
import Banner from '../../components/ui/banner';
import Hero from '../../components/ui/hero';
import SubPageStyle from '../../components/ui/SubPageStyle';

const Trainer = ({ trainer }) => {
  return (
    <Layout>
      <Hero img='/secondBg.jpg' heroSize='calc(100vh - 40vh)'>
        <Banner bannerTitle='trainer' btnTwo='classes' />
      </Hero>
      {trainer && (
        <SubPageStyle className='trainer max-width'>
          <div className='imgs--container'>
            <img src={trainer.img} alt={trainer.title} />
          </div>
          <div className='content'>
            <h1 className='name'>
              {trainer.title}
              <span className='subtitle'>{trainer.subtitle}</span>
            </h1>
            <p className='para'>{trainer.text}</p>
            <Fade top delay={500}>
              <Button title='back' toLink='/team' invert />
            </Fade>
          </div>
        </SubPageStyle>
      )}
    </Layout>
  );
};

Trainer.getInitialProps = async ctx => {
  const trainer = await trainers.filter(item => item.id === ctx.query.id);
  return { trainer: trainer[0] };
};

export default Trainer;
