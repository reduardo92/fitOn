import Layout from '../../components/layout';
import Button from '../../components/ui/button';
import Fade from 'react-reveal/Fade';
import Banner from '../../components/ui/banner';
import Hero from '../../components/ui/hero';
import SubPageStyle from '../../components/ui/SubPageStyle';
import services from '../../components/ui/Servicess/servicesData';

const Class = ({ clas }) => {
  console.log(clas);

  return (
    <Layout>
      <Hero img='/secondBg.jpg' heroSize='calc(100vh - 40vh)'>
        <Banner bannerTitle='trainer' btnTwo='classes' />
      </Hero>
      {clas && (
        <SubPageStyle className='trainer max-width'>
          <div className='imgs--container'>
            <img src={clas.img} alt={clas.title} />
          </div>
          <div className='content'>
            <h1 className='name'>{clas.title}</h1>
            <p className='para'>{clas.text}</p>
            <Fade top delay={500}>
              <Button title='back' toLink={'/classes'} invert />
            </Fade>
          </div>
        </SubPageStyle>
      )}
    </Layout>
  );
};

Class.getInitialProps = async ctx => {
  const classe = services.filter(item => item.id === ctx.query.id);
  return { clas: classe[0] };
};

export default Class;
