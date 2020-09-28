import React from 'react';
import styled from 'styled-components';

const CenteredMessage = styled.p`
  font-size: 4rem;
  left: 0;
  line-height: 200px;
  margin-top: -100px;
  position: absolute;
  text-align: center;
  top: 50%;
  width: 100%;
`;

const page404 = () => {
  return (
    <CenteredMessage>
      404: This page doesn&apos;t exist (yet)&nbsp;
      <span role="img" aria-label="frowny-face">
        🙁
      </span>
    </CenteredMessage>
  );
};

export default page404;
