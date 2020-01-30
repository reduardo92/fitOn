import { useRouter } from 'next/router';
import trainers from '../../components/ui/meetOurTeam/trainers';
import styled from 'styled-components';
import Button from '../../components/ui/button';
import Fade from 'react-reveal';
import Layout from '../../components/layout';
import Banner from '../../components/ui/banner';
import Hero from '../../components/ui/hero';

const Styled = styled.section`
  padding: 5em 1em;
  text-align: center;

  .imgs--container {
    position: relative;
    position: relative;
    transition: var(--ease--in--out--02s);
    max-width: 440px;
    width: 100%;
    height: 500px;
    margin: 0 auto;

    img {
      object-fit: cover;
      height: 500px;
    }

    &::before {
      content: '';
      position: absolute;
      background-color: var(--primary-clr);
      height: 100%;
      width: 100%;
      top: -30px;
      left: -10px;
      z-index: -1;
    }
  }

  .content {
    display: grid;
    justify-items: center;
  }
  .name {
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    margin-top: 1em;
    color: var(--primary-clr);
    font-size: 1.5rem;
    text-align: center;
    span {
      display: block;
      color: var(--second-clr);
      font-size: 1.3rem;
    }
  }

  .para {
    max-width: 600px;
    margin: 0 auto 2em;
    align-self: center;
    justify-self: center;
  }

  .button {
    align-self: end;
  }

  @media screen and (min-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 5em 6vw;

    .imgs--container {
    }
    .content {
      text-align: left;
      justify-items: left;
    }

    .name {
      font-size: 2rem;
      text-align: left;
    }
  }
`;

const Trainer = ({ trainer }) => {
  return (
    <Layout>
      <Hero img='/secondBg.jpg' heroSize='calc(100vh - 40vh)'>
        <Banner bannerTitle='trainer' btnTwo='classes' />
      </Hero>
      <Styled className='trainer max-width'>
        <div className='imgs--container'>
          <img src={trainer[0].img} alt={trainer[0].title} />
        </div>
        <div className='content'>
          <h1 className='name'>
            {trainer[0].title}
            <span className='subtitle'>{trainer[0].subtitle}</span>
          </h1>
          <p className='para'>{trainer[0].text}</p>
          <Fade top delay={500}>
            <Button title='back' toLink='/team' invert />
          </Fade>
        </div>
      </Styled>
    </Layout>
  );
};

Trainer.getInitialProps = async ctx => {
  const trainer = trainers.filter(item => item.id === ctx.query.id);
  return { trainer };
};

export default Trainer;
