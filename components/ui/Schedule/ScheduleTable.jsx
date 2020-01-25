import styled from 'styled-components';
import ScheduleCard from './ScheduleCard';

const Styled = styled.section`
  display: grid;
  justify-items: center;
  grid-gap: 4em;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  .day--ul--li:last-child {
    border-bottom: none;
  }

  @media screen and (min-width: 768px) {
    grid-gap: 1em;
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 0.1em;
  }
`;

const ScheduleTable = () => {
  return (
    <Styled className='schedule--table'>
      <ScheduleCard day='monday' />
      <ScheduleCard day='tuesday' />
      <ScheduleCard day='wednesday' />
      <ScheduleCard day='thursday' />
      <ScheduleCard day='friday' />
      <ScheduleCard day='saturday' />
      <ScheduleCard day='sunday' />
    </Styled>
  );
};

export default ScheduleTable;
