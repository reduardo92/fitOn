import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Button from './button';

const Styled = styled.section`
  position: relative;
  background-image: url(/platesbg.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  min-height: 75vw;
  z-index: 1;
  display: grid;
  justify-items: center;
  align-content: center;
  padding: 2em;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: -1;
  }

  .title--content {
    padding: 0 1em;
    text-align: center;
    max-width: 500px;
  }

  .title {
    span {
      color: var(--primary-clr);
    }
  }

  .img-line {
    width: 100px;
    margin: 1em auto;
  }

  .last--tab {
    background-color: var(--primary-clr);

    &:focus,
    &:hover {
      border-color: var(--primary-clr);
      border: 2px solid var(--primary-clr);
      color: var(--white-clr);
      background-color: transparent;
    }
  }

  @media screen and (min-width: 760px) {
    min-height: 25vw;
  }
  @media screen and (min-width: 1100px) {
    min-height: 12vw;
    background-position: bottom;
  }
`;

const PersonalTrainerBanner = () => (
  <Styled className='schedule--weeek'>
    <div className='title--content'>
      <h2 className='title'>
        Do you need a <span>Personal Trainer?</span> Get in touch with us now.
      </h2>
      <img src='/yellowLine.png' alt='yellow line' className='img-line' />
    </div>
    <Button title='contact us' toLink='/contact' />
  </Styled>
);

export default PersonalTrainerBanner;
