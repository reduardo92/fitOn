import React from 'react';
import styled from 'styled-components';

const Styled = styled.div`
  position: relative;
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
  object-fit: cover;
  min-height: ${props => (props.heroSize ? '100vh' : 'calc(100vh - 5vh)')};
  text-align: center;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  z-index: 1;
  clip-path: polygon(0 0 ,100% 0, 100% calc(100% - 30vw), 0 100%);
  /* margin-bottom: -10vw; */

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${props => props.heroOpacity || 'rgba(0, 0, 0, 0.65)'};
    z-index: -1;
  }



  /* @media screen and (min-width: 768px) {
    min-height: ${props => (props.heroSize ? '100vh' : 'calc(100vh - 70vh)')};
  }
  @media screen and (min-width: 1024px) {
    min-height: ${props => (props.heroSize ? '100vh' : 'calc(100vh - 50vh)')};
  } */
`;

const hero = ({ img = '/homeHero.jpg', heroSize, heroOpacity, children }) => {
  return (
    <Styled
      className='hero'
      img={img}
      heroSize={heroSize}
      heroOpacity={heroOpacity}
    >
      {children}
    </Styled>
  );
};

export default hero;
