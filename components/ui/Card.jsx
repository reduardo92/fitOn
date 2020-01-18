import styled from 'styled-components';

const Styled = styled.div`
  position: relative;
  max-width: 350px;
  margin: 0 auto;

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

  .card--img {
    position: relative;
    transition: var(--ease--in--out--02s);
    width: 100%;
  }
  .card--body {
    padding: 0.5em 1em 1.5em;
    background-color: var(--white-clr);
    color: var(--second-clr);

    &__para {
      padding-top: 0.5em;
    }
  }
`;

const Card = ({ data: { img, title, subtitle } }) => {
  return (
    <Styled className='card'>
      <div className='card--img'>
        <img src={img} alt={title} />
      </div>
      {title && (
        <div className='card--body'>
          <h3 className='card--body__title'>{title}</h3>
          <div className='card--body__para'>{subtitle}</div>
        </div>
      )}
    </Styled>
  );
};

export default Card;
