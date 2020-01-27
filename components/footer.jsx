import styled from 'styled-components';
import Socials from './ui/socials';

const Styled = styled.footer`
  position: relative;
  text-align: center;
  background-color: var(--primary-clr);
  background: url(/roomGym.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  background-position: center;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.65);
    z-index: -1;
  }

  p {
    color: var(--white-clr);
  }

  .content {
    display: grid;
    grid-gap: 1em;
    gap: 1em;
    padding: 2em 0;
    max-width: 1400px;
    margin: 0 auto;
  }

  .addresse {
    display: grid;
    grid-gap: 0.5em;
    gap: 0.5em;
    justify-content: center;
  }

  .logo {
    width: 150px;
    margin: 0 auto 1em;
  }

  .hours {
    display: grid;
    grid-gap: 0.3em;
    gap: 0.3em;
    justify-content: center;
    align-items: center;
  }

  .social {
    margin: 0 auto;
  }

  .copyRight {
    background-color: var(--second-clr);
    padding: 0.5em 0;
  }

  @media screen and (min-width: 1024px) {
    .content {
      grid-template-columns: repeat(3, 1fr);
      padding: 3em 0;
    }

    .social {
      order: -1;
      width: 250px;

      .social--link {
        font-size: 1.7rem;
      }
    }
  }
`;

const Footer = () => (
  <Styled className='footer'>
    <div className='content'>
      <div className='addresse'>
        <img className='logo' src='/logo.png' alt='logo' />
        <p className='info'>203 Fake St, chicago, Ill</p>
        <p className='info'>(33) 333-3333</p>
      </div>
      <div className='hours'>
        <p>Open 24/7</p>
      </div>
      <Socials />
    </div>
    <div className='copyRight'>
      <p>© Fit On 2020</p>
    </div>
  </Styled>
);

export default Footer;
