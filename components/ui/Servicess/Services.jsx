import styled from 'styled-components';
import TitleBanner from '../titleBanner';
import Button from '../button';
import services from './servicesData';
import Card from '../Card';

const Stlyed = styled.section`
  position: relative;
  background: url(bars.jpg);
  background-size: cover;
  background-position: left;
  object-fit: cover;
  min-height: 100vh;
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 10vw), 0 100%);
  padding: 5em 1em;
  z-index: 1;
  text-align: center;

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

  & > :last-child {
    margin-top: 3em;
  }
`;

const Services = () => {
  return (
    <Stlyed>
      <TitleBanner title='Services' subtitle='STEP UP YOUR FITNESS' invert />
      <div className='card--container'>
        {services.map(
          (card, i) => i <= 2 && <Card key={card.id} data={card} />
        )}
      </div>
      <Button title='view more' toLink='/services' />
    </Stlyed>
  );
};

export default Services;
