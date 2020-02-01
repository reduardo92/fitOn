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

  & > :first-child {
    margin: 0 auto 1em;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* max-width: 800px; */
    margin: 2em auto;
  }

  .card--membership {
    margin: 2em 0.5em;
  }

  @media screen and (min-width: 768px) {
    .container {
      flex-direction: row;
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

    .container {
      grid-column: 1 /3;
      max-width: 100%;
    }

    .card--membership {
      margin: 2em 2em;
    }
  }
`;

const PricingContent = () => {
  return (
    <Styled className='pricing--content max-width'>
      <Barbell />
      <TitleBanner title='pricing' subtitle='membership plans' />
      <div className='container'>
        {memerships.map((items, i) => (
          <MembershipCard key={i} data={items} invert />
        ))}
      </div>
    </Styled>
  );
};

export default PricingContent;
