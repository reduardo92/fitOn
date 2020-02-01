import styled from 'styled-components';
import Link from 'next/link';

const Styled = styled.div`
  position: relative;
  max-width: 380px;
  margin: 0 auto;

  .classes--card--img {
    position: relative;
    transition: var(--ease--in--out--02s);
    width: 100%;
    height: 200px;
    cursor: pointer;
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

  .classes--card--title {
    color: var(--second-clr);
    margin-top: 1em;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

const ClassesCard = ({ data: { id, img, title } }) => (
  <Styled className='classes--card'>
    <Link href='/class/[id]' as={`/class/${id}`}>
      <div className='classes--card--img'>
        <img src={img} alt={title} />
      </div>
    </Link>
    <h3 className='classes--card--title'>{title}</h3>
  </Styled>
);

export default ClassesCard;
