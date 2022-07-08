import styled from '@emotion/styled';
import React, { MouseEventHandler } from 'react';

interface props {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: any;
}

const StyledButton = styled.button`
  background-color: #fffb00;
  border: 0;
  margin: 5px 5px;
  padding: 10px 5px;
  height: 50px;
  min-width: 120px;
  font-size: 15px;
  font-weight: 600;
  transition-duration: 500ms;
  :hover{
    background-color: #d6d302;
  }
`

const StyledSubmitButton = styled.button`
  background-color: #959200;
  border: 0;
  margin: 5px 5px;
  padding: 10px 5px;
  height: 50px;
  min-width: 120px;
  font-size: 15px;
  font-weight: 600;
  transition-duration: 500ms;
  :hover{
    background-color: #d6d302;
  }
`

const Button = ({ onClick, children, ...s }: props) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

const SubmitButton = ({ onClick, children }: props) => {
  return <StyledSubmitButton onClick={onClick} >{children}</StyledSubmitButton>
}

export default Button;

export {
  SubmitButton
}