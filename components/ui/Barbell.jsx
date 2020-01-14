import styled from 'styled-components';

const Styled = styled.img`
  margin: 5em 0;
`;

const Barbell = () => {
  return <Styled className='barbell' src='olympic_barbell.svg' alt='barbell' />;
};

export default Barbell;
