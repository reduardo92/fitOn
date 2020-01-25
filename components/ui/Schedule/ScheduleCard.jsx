import styled from 'styled-components';
import scheduleData from './scheduleData';

const Styled = styled.div`
  width: 100%;
  font-weight: bold;

  .day {
    text-transform: uppercase;
    color: var(--white-clr);
    padding: 0.8em 0.5em;
    background-color: var(--second-clr);
  }

  .day--ul--li {
    background-color: var(--primary-clr);
    border-bottom: 1px solid rgba(0, 0, 0, 0.9);
    width: 100%;
    color: var(--second-clr);
    height: 65px;
    align-items: baseline;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

const ScheduleCard = ({ day }) => {
  return (
    <Styled className='card'>
      <h3 className='day'>{day}</h3>
      <ul className='day--ul'>
        {scheduleData[day].map(item => (
          <li key={item.id} className='day--ul--li'>
            <p className='tile'>{item.title}</p>
            <p className='hour'>{item.time}</p>
          </li>
        ))}
      </ul>
    </Styled>
  );
};

export default ScheduleCard;
