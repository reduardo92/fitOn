import styled from 'styled-components';
import TitleBanner from '../titleBanner';
import memerships from './memeberships';
import MembershipCard from '../MembershipCard';

const Stlyed = styled.section`
  position: relative;
  background: ${props => (props.pricingHome ? '' : 'url(roomGym.jpg)')};
  background-size: cover;
  background-position: left;
  object-fit: cover;
  min-height: 100vh;
  padding: 9em 1em;
  z-index: 1;
  text-align: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 10vw));

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

  .card--container {
    max-width: 600px;
    margin: 4em auto;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 3em;

    & > :last-child {
      grid-column: auto;
    }
  }

  @media screen and (min-width: 1200px) {
    .card--container {
      max-width: 900px;
      grid-gap: 0.1em;
    }
  }

  @media screen and (min-width: 1024px) {
    min-height: 85vh;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 5vw), 0 100%);
  }
`;

const MembershipPlans = ({ pricingHome }) => {
  return (
    <Stlyed pricingHome={pricingHome}>
      <div className='max-width'>
        <TitleBanner title='pricing' subtitle='membership plans' invert />
        <div className='card--container'>
          {memerships.map((items, i) => (
            <MembershipCard key={i} data={items} />
          ))}
        </div>
      </div>
    </Stlyed>
  );
};

export default MembershipPlans;
