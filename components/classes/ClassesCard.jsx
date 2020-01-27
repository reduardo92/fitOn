import styled from 'styled-components';

const Styled = styled.div`
  position: relative;
  max-width: 380px;
  margin: 0 auto;

  .classes--card--img {
    position: relative;
    transition: var(--ease--in--out--02s);
    width: 100%;
    height: 200px;
    img {
      object-fit: cover;
      height: 100%;
    }

    &::before {
      content: '';
      position: absolute;
      background-color: var(--primary-clr);
      height: 100%;
      width: 100%;
      top: -12px;
      left: -10px;
      z-index: -1;
    }
  }

  .classes--card--title {
    color: var(--second-clr);
    margin-top: 1em;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

const ClassesCard = ({ data: { img, title } }) => (
  <Styled className='classes--card'>
    <div className='classes--card--img'>
      <img src={img} alt={title} />
    </div>
    <h3 className='classes--card--title'>{title}</h3>
  </Styled>
);

export default ClassesCard;
