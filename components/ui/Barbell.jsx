import styled from 'styled-components';

const Styled = styled.img`
  /* margin: 5em 0; */

  max-width: 500px;
  margin: ${props => (props.addMg ? props.addMg : ' 0 auto')};
`;

const Barbell = ({ addMg }) => {
  return (
    <Styled
      addMg={addMg}
      className='barbell'
      src='olympic_barbell.svg'
      alt='barbell'
    />
  );
};

export default Barbell;
