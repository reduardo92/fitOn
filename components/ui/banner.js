import styled from 'styled-components';
import Button from './button';
import Fade from 'react-reveal/Fade';
import { Children } from 'react';

const Styled = styled.div`
  padding: 0 0.5em;
  text-align: center;
  .title {
    font-family: var(--fn-monterrat);
    text-transform: uppercase;
    margin-bottom: 1em;
    font-size: 2.5rem;

    span {
      display: block;
    }
  }

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    .button {
      font-size: 1.15rem;
    }
  }
`;

const Banner = ({ banner, bannerTitle }) => {
  return (
    <Styled>
      <Fade bottom>
        <h1 className='title'>
          {banner === 'home' ? (
            <>
              become the <span>best you</span>
            </>
          ) : (
            bannerTitle
          )}
        </h1>
        {banner === 'home' ? (
          <Fade top delay={500}>
            <Button title='join now!' toLink='/contact' />
          </Fade>
        ) : (
          <Fade top delay={500}>
            <div className='btn--group'>
              <Button title='visit us' toLink='/contact' />
              <Button title='visit us' toLink='/contact' />
            </div>
          </Fade>
        )}
      </Fade>
    </Styled>
  );
};

// <Fade top delay={500}>
//   <Button title='visit us' toLink='/contact' />
// </Fade>

export default Banner;
