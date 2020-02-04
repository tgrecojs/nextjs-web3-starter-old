import { css } from '@emotion/core';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Button = styled.button`
  ${tw`bg-blue-500 text-white font-mono px-4 py-2 rounded`} :hover {
    ${tw`bg-blue-700`}
  }
`;

/**
 * Also, we can use `css`.
 */

const Layout = styled.div`
  ${tw`h-screen bg-teal-200 m-0`}
`;
const CardStyle = css`
  ${tw`w-1/2 flex flex-col shadow-xl bg-purple-300 rounded-lg mx-10 my-10 p-6`}
`;

const Card = styled.div`
  ${tw`font-mono text-left h-12`}
  ${CardStyle}
`;

/**
 * We can use macros in `styled`.
 */
const Header = styled.div`
  ${tw`font-mono text-lg text-gray-800 hover:text-red-500`}
`;

export { Button, Card, CardStyle, Header, Layout };
