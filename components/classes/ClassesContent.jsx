import styled from 'styled-components';
import Barbell from '../ui/Barbell';
import TitleBanner from '../ui/titleBanner';
import ClassesCard from './ClassesCard';
import services from '../ui/Servicess/servicesData';

const Styled = styled.section`
  padding: 4em 1em;
  text-align: center;

  @media screen and (min-width: 768px) {
    & > :first-child {
      width: 90%;
      margin: 0 auto;
    }
  }
  @media screen and (min-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;

    & > :first-child {
      align-self: end;
      margin: 0;
    }

    .title--banner {
      margin-left: 9em;
    }

    .card--container {
      grid-column: 1 / 3;
    }
  }
`;

const ClassesContent = () => (
  <Styled className='classes--content max-width'>
    <Barbell />
    <TitleBanner title='classes' subtitle='lets build the best you' />
    <div className='card--container'>
      {services.map((item, i) => (
        <ClassesCard key={i} data={item} />
      ))}
    </div>
  </Styled>
);

export default ClassesContent;
