import styled from 'styled-components';
import Link from 'next/link';

const Styled = styled.div`
  position: relative;
  width: 200px;
  height: 450px;
  border: 2px solid var(--primary-clr);
  display: grid;
  padding: 0 0.5em;
  justify-items: center;
  /* padding: 8em 1em; */

  .card--title {
    color: ${props =>
      props.invert ? 'var(--second-clr)' : 'var(--white-clr)'};
    font-weight: bold;
    align-self: center;
    font-size: 1.75rem;

    .month {
      display: block;
      color: ${props =>
        props.invert ? 'var(--second-clr)' : 'var(--white-clr)'};
      font-weight: normal;
      font-size: 1rem;
    }
  }

  .card--packages {
    color: var(--second-clr);
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    align-self: flex-end;

    &__item {
      color: ${props =>
        props.invert ? 'var(--second-clr)' : 'var(--white-clr)'};
      text-align: center;
      margin-bottom: 1.5em;
    }

    .line {
      width: 50px;
      height: 9px;
      background-color: var(--primary-clr);
      margin: 0 auto;
    }
  }

  .button {
    text-transform: uppercase;
    margin-bottom: 1em;
    align-self: center;
    color: var(--second-clr);
    background-color: var(--primary-clr);
    padding: 0.8em 1em;
    font-weight: bold;
    border: 2px solid var(--primary-clr);
    border-radius: 5px;
    font-size: 0.9rem;
    transition: var(--ease--in--out--02s);

    &:hover,
    &:focus {
      background-color: transparent;
      color: var(--white-clr);
    }
  }
`;

const MembershipCard = ({ data: { id, price, included } }) => (
  <Styled className='card--membership'>
    <h3 className='card--title'>
      ${price} <span className='month'>/month</span>
    </h3>
    <ul className='card--packages'>
      {included.map((item, i) => (
        <li key={i} className='card--packages__item'>
          {item === '-' ? <div className='line' /> : item}
        </li>
      ))}
    </ul>
    <Link href='/cart'>
      <a className='button'>choose plan</a>
    </Link>
  </Styled>
);

export default MembershipCard;
