import styled from 'styled-components';

import Fade from 'react-reveal/Fade';
import useForm from '../Hooks/useForm';

const Styled = styled.section`
  position: relative;
  background-image: url(/platesbg.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  min-height: 75vw;
  z-index: 1;
  display: grid;
  justify-items: center;
  align-content: center;
  padding: 2em;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: -1;
  }

  .title--content {
    padding: 0 1em;
    text-align: center;
  }

  .img-line {
    width: 100px;
    margin: 0 auto;
  }

  .btns--container {
    text-align: center;
    display: grid;
    margin-top: 1em;
  }

  .input--tab {
    display: block;
    font-family: var(--fn-monterrat);
    font-weight: var(--fw-bold);
    font-size: 1em;
    text-align: center;
    background-color: var(--white-clr);
    color: var(--second-clr);
    padding: 1em 1em;
    border-radius: 40px;
    border: 1px solid var(--second-clr);
    position: relative;
    transition: var(--ease--in--out--02s);
    cursor: pointer;
    margin-bottom: 1em;

    &:focus {
      outline: none;
      border-color: var(--primary-clr);
      border: 2px solid var(--primary-clr);
      color: ${props => props.hoverclr && 'var(--second-clr)'};
      cursor: pointer;
    }
  }

  .last--tab {
    background-color: var(--primary-clr);

    &:focus,
    &:hover {
      border-color: var(--primary-clr);
      border: 2px solid var(--primary-clr);
      color: var(--white-clr);
      background-color: transparent;
    }
  }

  @media screen and (min-width: 760px) {
    min-height: 25vw;

    .btns--container {
      grid-template-columns: repeat(3, 1fr);
      justify-content: center;
    }

    .input--tab {
      padding: 1em 0;
    }

    .last--tab {
      grid-column: 2/2;
    }
  }
  @media screen and (min-width: 1100px) {
    min-height: 12vw;
    background-position: bottom;

    .btns--container {
      grid-template-columns: repeat(4, 1fr);
    }

    .last--tab {
      grid-column: auto;
    }
  }
`;

const ScheduleWeek = () => {
  const submit = () => {
    console.log(form);
    setForm({
      name: '',
      email: '',
      phone: ''
    });
  };

  const { handleChange, handleSubmit, form, setForm } = useForm(
    {
      name: '',
      email: '',
      phone: ''
    },
    submit
  );

  return (
    <Styled className='schedule--weeek'>
      <div className='title--content'>
        <h2 className='title'>SCHEDULE YOUR FREE WEEK</h2>
        <img src='/yellowLine.png' alt='yellow line' className='img-line' />
      </div>
      <form className='btns--container' onSubmit={handleSubmit}>
        <input
          type='text'
          className='input--tab'
          placeholder='NAME'
          onChange={handleChange}
          name='name'
          value={form.name}
        />
        <input
          type='email'
          className='input--tab'
          placeholder='EMAIL'
          onChange={handleChange}
          name='email'
          value={form.email}
        />
        <input
          type='number'
          className='input--tab'
          placeholder='PHONE'
          onChange={handleChange}
          name='phone'
          value={form.phone}
        />
        <input type='submit' value='SUBMIT' className='input--tab last--tab' />
      </form>
    </Styled>
  );
};

export default ScheduleWeek;
