import styled from 'styled-components';
import TitleBanner from '../ui/titleBanner';
import Button from '../ui/button';
import Fade from 'react-reveal/Fade';

const Styled = styled.section`
  padding: 3em 5vw 4em;
  text-align: center;
  display: grid;
  grid-gap: 4em;
  justify-items: center;

  .title--banner {
    margin-bottom: 1.3em;
  }

  .para {
    margin-bottom: 1em;
  }

  .button {
    margin-top: 1em;
  }

  .imgs--container {
    display: grid;
    grid-gap: 1em;
    gap: 1em;
  }

  @media screen and (min-width: 760px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1em;

    .content {
      order: 1;
      display: grid;

      & > :last-child {
        align-self: self-end;
      }
    }

    .imgs--container {
      grid-template-columns: repeat(2, 1fr);
      /* align-content: center; */
      grid-gap: 0.5em;
      gap: 0.5em;
      max-width: 700px;
    }

    .top {
      grid-column: 1 /3;
    }

    .img {
      align-self: stretch;
      object-fit: cover;
    }
  }
  @media screen and (min-width: 1200px) {
    grid-gap: 5em;
    text-align: left;

    .title--banner,
    .title {
      margin: 0;
    }
  }
`;

const About = () => {
  return (
    <Styled className='home--about max-width'>
      <Fade>
        <div className='content'>
          <TitleBanner title='welcome' subtitle='why choose us?' />
          <p className='para'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
            possimus distinctio ex. Natus totam voluptatibus animi aspernatur
            ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore
            possimus distinctio ex. Natus totam voluptatibus animi aspernatur
            ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore.
          </p>
          <p className='para'>
            mollitia quibusdam temporibus culpa dolore consequuntur sunt nisi
            consequuntur sunt nisi. animi aspernatur ducimus quas obcaecati
            mollitia quibusdam temporibus culpa dolore consequuntur sunt nisi.
          </p>
          <Fade top delay={500}>
            <Button title='read more' toLink='/about' invert />
          </Fade>
        </div>
        <div className='imgs--container'>
          <img src='/strenght.jpg' alt='img' className='img top' />
          <img src='/secondBg.jpg' alt='img' className='img' />
          <img src='/heavyBall.jpg' alt='img' className='img' />
        </div>
      </Fade>
    </Styled>
  );
};

export default About;
