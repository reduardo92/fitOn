import styled from 'styled-components';

const SubPageStyle = styled.section`
  padding: 5em 1em;
  text-align: center;

  .imgs--container {
    position: relative;
    position: relative;
    transition: var(--ease--in--out--02s);
    max-width: 440px;
    width: 100%;
    height: 500px;
    margin: 0 auto;

    img {
      object-fit: cover;
      height: 500px;
    }

    &::before {
      content: '';
      position: absolute;
      background-color: var(--primary-clr);
      height: 100%;
      width: 100%;
      top: -30px;
      left: -10px;
      z-index: -1;
    }
  }

  .content {
    display: grid;
    justify-items: center;
  }
  .name {
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    margin-top: 1em;
    color: var(--primary-clr);
    font-size: 1.5rem;
    text-align: center;
    span {
      display: block;
      color: var(--second-clr);
      font-size: 1.3rem;
    }
  }

  .para {
    max-width: 600px;
    margin: 0 auto 2em;
    align-self: center;
    justify-self: center;
  }

  .button {
    align-self: end;
  }

  @media screen and (min-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 5em 6vw;

    .content {
      text-align: left;
      justify-items: left;
    }

    .name {
      font-size: 2rem;
      text-align: left;
    }

    .para {
      margin: 0 0 2em;
      justify-self: flex-start;
      text-align: left;
    }
  }
`;

export default SubPageStyle;
