import styled from '@emotion/styled';
import React from 'react';

interface props {
  children?: any;
  flexDirection?: 'row' | 'column';
  justifyContent?: 'center' | 'start' | 'end' | 'around';
}

const Container = styled.div`
  padding: 3px;
  width: 100%;
  display: flex;
`;

const FlexContainer = ({
  children,
  flexDirection = 'column',
  justifyContent = 'start',
}: props) => {
  return (
    <Container style={{ flexDirection, justifyContent }}>{children}</Container>
  );
};

export default FlexContainer;
