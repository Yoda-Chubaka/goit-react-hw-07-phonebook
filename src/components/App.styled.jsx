import styled from 'styled-components';

export const Container = styled.div `
    width: 400px;
    margin: 0px auto;
`
export const Section = styled.section`
text-align: center;
font-size: 32px;
font-weight: 700;
`;

export const LabelStyle = styled.label`
    width: 400px;
    justify-content: space-between;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    /* justify-content: center; */
    gap: 5px;
`;

export const InputStyle = styled.input `
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

export const ButtonStyle = styled.button`
height: 30px;
width: 100px;
padding: 2px;
font-weight: 500;
/* display: inline-flex;
align-items: center;
justify-content: center; */
border: none;
border-radius: 8px;
background-color: #a3a0a0;
&:hover,
&:focus {
        background-color: #a3a0a0;
        cursor: pointer;
        color: white;
        border: none;
    }
`;