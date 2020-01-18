import styled from 'styled-components';

const Styled = styled.div`
  position: relative;
  max-width: 350px;
  margin: 0 auto;

  .card--img {
    position: relative;
    transition: var(--ease--in--out--02s);
    width: 100%;
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
`;

const TrainerCard = ({ data: { img, title, subtitle } }) => (
  <Styled className='card--trainer'>
    <div className='card--img'>
      <img src={img} alt={title} />
    </div>
    <div className='card--body'>
      <h3 className='card--body__title'>{title}</h3>
      <div className='card--body__para'>{subtitle}</div>
    </div>
  </Styled>
);

export default TrainerCard;
