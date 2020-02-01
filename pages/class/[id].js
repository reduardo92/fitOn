import Layout from '../../components/layout';
import Button from '../../components/ui/button';
import Fade from 'react-reveal/Fade';
import Banner from '../../components/ui/banner';
import Hero from '../../components/ui/hero';
import SubPageStyle from '../../components/ui/SubPageStyle';
import services from '../../components/ui/Servicess/servicesData';

const Class = ({ classe }) => (
  <Layout>
    <Hero img='/secondBg.jpg' heroSize='calc(100vh - 40vh)'>
      <Banner bannerTitle='trainer' btnTwo='classes' />
    </Hero>
    <SubPageStyle className='trainer max-width'>
      <div className='imgs--container'>
        <img src={classe[0].img && classe[0].img} alt={classe[0].title} />
      </div>
      <div className='content'>
        <h1 className='name'>{classe[0].title}</h1>
        <p className='para'>{classe[0].text}</p>
        <Fade top delay={500}>
          <Button title='back' toLink={'/classes'} invert />
        </Fade>
      </div>
    </SubPageStyle>
  </Layout>
);

Class.getInitialProps = async ctx => {
  const classe = services.filter(item => item.id === ctx.query.id);
  return { classe };
};

export default Class;
