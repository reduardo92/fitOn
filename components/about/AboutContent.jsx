import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import TitleBanner from '../ui/titleBanner';
import Button from '../ui/button';

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
    position: relative;
    position: relative;
    transition: var(--ease--in--out--02s);
    max-width: 440px;
    width: 100%;
    height: 500px;

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
      align-self: center;
      justify-self: flex-end;
    }
  }
  @media screen and (min-width: 1200px) {
    grid-gap: 5em;
    text-align: left;

    .title--banner,
    .title {
      margin: 0;
    }

    .imgs--container {
      &::before {
        top: -30px;
        left: -25px;
      }
    }
  }
`;
const AboutContent = () => (
  <Styled className='about--content max-width'>
    <Fade>
      <div className='content'>
        <TitleBanner title='welcome' subtitle='We care about your health' />
        <p className='para'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus
          distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas
          obcaecati mollitia quibusdam temporibus culpa dolore molestias
          blanditiis animi aspernatur ducimus quas obcaecati mollitia
        </p>
        <p className='para'>
          consequuntur sunt nisi. animi aspernatur ducimus quas obcaecati
          mollitia quibusdam temporibus culpa dolore consequuntur sunt nisi.
          animi aspernatur ducimus quas
        </p>
        <p className='para'>
          consequuntur sunt nisi. animi aspernatur ducimus quas obcaecati
          mollitia quibusdam temporibus culpa dolore consequuntur sunt nisi.
          animi aspernatur ducimus quas
        </p>
        <Fade top delay={500}>
          <Button title='contact us' toLink='/contact' invert />
        </Fade>
      </div>
      <div className='imgs--container'>
        <img src='/homeHero.jpg' alt='hemo hero' />
      </div>
    </Fade>
  </Styled>
);

export default AboutContent;
