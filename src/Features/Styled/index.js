import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

/**
 * We can use macros in `styled`.
 */
const Header = styled.div`
  ${tw`font-mono text-sm text-gray-800 hover:text-red-500`}
`;

export const Button = styled.button`
  ${tw`bg-blue-500 text-white font-mono px-4 py-2 rounded`} :hover {
    ${tw`bg-blue-700`}
  }
`;

/**
 * Also, we can use `css`.
 */
export const CardStyle = css`
  display: flex;
  align-items: center;
  transition: all 0.8s;
  ${tw`rounded p-4 shadow-xl`}
`;

export const Card = styled.div`
  ${CardStyle}
`;

export const WalletCard = styled.div`
  ${CardStyle}
  flex-direction: column;
  ${tw`p-4 m-4 w-1/4 border-solid border-4 bg-blue-200 border-purple-300`}
`;

export const ChainDetails = styled.div`
  ${CardStyle}
  ${tw`p-4 m-4 w-2/4 border-solid border-4  bg-gray-200 border-purple-300`}
  :hover {
    transform: scale(1.2);
    ${tw`bg-blue-300`};
  }
`;

const Example = ({ children }) => (
  <Card>
    <Header>Hello</Header>
    <Button>Emotion.js</Button>
    {children}
  </Card>
);

export default Example;
