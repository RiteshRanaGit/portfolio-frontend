import React from 'react';
import styled from 'styled-components';

const TestDiv = styled.div`
  background-color: blue;
  color: white;
  padding: 20px;
  text-align: center;
`;

function TestApp() {
  return (
    <TestDiv>
      <h1>If you see this with blue background, styled-components is working!</h1>
    </TestDiv>
  );
}

export default TestApp;