import styled from 'styled-components';
import Barbell from '../ui/Barbell';
import TitleBanner from '../ui/titleBanner';
import MembershipCard from '../ui/MembershipCard';
import memerships from '../ui/membershipPlans/memeberships';

const Styled = styled.section`
  padding: 4em 1em;

  & > :last-child {
    grid-column: auto;
  }

  & > :last-child {
    margin-top: 3em;
  }

  & > :first-child {
    margin: 0 auto 1em;
  }

  @media screen and (min-width: 768px) {
    & > :first-child {
      width: 90%;
      margin: 0 auto;
    }
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

  @media screen and (min-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;

    & > :first-child {
      align-self: end;
      justify-self: center;
      margin: 0;
    }

    .title--banner {
      margin-left: 9em;
    }

    .card--container {
      grid-column: 1 / 3;
      max-width: 1300px;
      grid-gap: 1em;
      justify-items: center;
      margin: 3em auto;
    }
  }
`;

const PricingContent = () => {
  return (
    <Styled className='pricing--content max-width'>
      <Barbell />
      <TitleBanner title='pricing' subtitle='membership plans' />
      <div className='card--container'>
        {memerships.map((items, i) => (
          <MembershipCard key={i} data={items} invert />
        ))}
      </div>
    </Styled>
  );
};

export default PricingContent;
