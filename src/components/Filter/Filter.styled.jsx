import styled from 'styled-components';

export const FilterContainer = styled.div`
width: 300px;
display: block;
align-items: center;
/* justify-content: center; */
`

export const LabelStyle = styled.label`
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  gap: 8px;
  max-width: 100%;
  width: 300px;
`;

export const Input = styled.input`
  display: flex;
  justify-content: center;
  width: 100%;
   height: 25px;
    padding: 4px;
    font-size: 14px;
    border-radius: 5px;
    border: 1px solid grey;
    background-color: transparent;
    outline: 0;
`;

export const InputStyle = styled.input`
display: flex;
gap: 8px;
margin-left: 8px;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 4px;
  padding-right: 4px;

  border: 1px solid grey;
  outline: 0;
  border-radius: 8px;
  color: ${props => props.theme.colors.text};

  background-color: transparent;

  font-size: ${props => props.theme.fontSizes.s};
`;