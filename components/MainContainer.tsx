import styled from '@emotion/styled';
import React from 'react';

interface props {
  children?: any;
}

const Container = styled.div`
  padding: 10px 20px;
  width: 100%;
`

const MainContainer = ({ children }: props) => {
  return <Container>{children}</Container>;
};

export default MainContainer;
