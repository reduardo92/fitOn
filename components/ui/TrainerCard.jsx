import styled from 'styled-components';
import Link from 'next/link';

const Styled = styled.div`
  position: relative;
  max-width: 350px;
  margin: 0 auto;

  .card--img {
    position: relative;
    transition: var(--ease--in--out--02s);
    width: 100%;
    cursor: pointer;

    img {
      object-fit: cover;
      height: 450px;
    }

    &::before {
      content: '';
      position: absolute;
      background-color: var(--primary-clr);
      height: 100%;
      width: 100%;
      top: 12px;
      /* left: 0; */
      right: -6px;
      z-index: -1;
    }

    &::after {
      content: 'View More';
      transition: var(--ease--in--out--02s);
      display: grid;
      justify-items: center;
      align-items: center;
      position: absolute;
      font-size: 1.25rem;
      font-weight: bold;
      background-color: rgba(0, 0, 0, 0.8);
      height: 0;
      width: 100%;
      opacity: 0;
      top: 0;
      left: 0;
      right: 0;
    }

    &:hover::after,
    &:focus::after {
      opacity: 1;
      height: 100%;
    }
  }

  .card--body {
    padding: 0.5em 1em 1.5em;
    color: var(--second-clr);
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    margin-top: 1em;

    &__title {
      color: var(--primary-clr);
    }
  }

  @media screen and (min-width: 1200px) {
    .card--img {
      width: 350px;
    }
  }
`;

const TrainerCard = ({ data: { id, img, title, subtitle } }) => (
  <Styled className='card--trainer'>
    <Link href='/trainer/[id]' as={`/trainer/${id}`}>
      <div className='card--img'>
        <img src={img} alt={title} />
      </div>
    </Link>
    <div className='card--body'>
      <h3 className='card--body__title'>{title}</h3>
      <div className='card--body__para'>{subtitle}</div>
    </div>
  </Styled>
);

export default TrainerCard;
