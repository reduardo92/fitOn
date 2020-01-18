import styled from 'styled-components';
import Barbell from '../Barbell';
import TitleBanner from '../titleBanner';
import trainers from './trainers';
import Button from '../button';
import TrainerCard from '../TrainerCard';

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

const MeetOurTeam = () => (
  <Styled className='meet--our--team'>
    <Barbell />
    <TitleBanner title='trainers' subtitle='meet our team' />
    <div className='card--container'>
      {trainers.map((trainer, i) => i <= 2 && <TrainerCard data={trainer} />)}
    </div>
    <Button title='see the whole team' toLink='/team' bgclr />
  </Styled>
);

export default MeetOurTeam;
