import styled from 'styled-components';
import Barbell from '../Barbell';
import TitleBanner from '../titleBanner';
import ScheduleTable from './ScheduleTable';

const Styled = styled.section`
  padding: 4em 1em;
  text-align: center;
  max-width: 1500px;
  margin: 0 auto;

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

    & > :last-child {
      margin-top: 2em;
      justify-self: center;
      grid-column: 1/3;
    }
  }
`;

const Schedule = () => {
  return (
    <Styled className='schedule'>
      <Barbell />
      <TitleBanner title='schedule' subtitle='timetable' />
      <ScheduleTable />
    </Styled>
  );
};

export default Schedule;
