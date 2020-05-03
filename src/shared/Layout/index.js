import { css } from '@emotion/core';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const grow = `
  transform: scale(1);
`;

const defaultTransition = `
transition: all 0.3s ease-in-out;
`;

const Header = styled.div`
  ${tw`text-gray-800 bg-teal-400 rounded-sm hover:bg-teal-200`}
  ${defaultTransition};
  min-height: 70px;
  :hover {
    ${tw`rounded-lg`}
  }
`;

const HeaderText = styled.h2`
  ${tw`text-lg m-0 text-center text-gray-800 hover:text-purple-600`}
  ${grow};
  ${defaultTransition} :hover {
    ${tw`text-2sxl`}
  }
`;

const Button = styled.button`
  ${tw`bg-blue-500 text-white text-lg px-6 py-2 m-4 rounded`} :hover {
    ${tw`bg-blue-700`}
  }
  font-family: 'Noto Sans KR';
`;

const BasicPadding = css`
  ${tw`px-6 py-4`}
`;

const BasicText = css`
  ${tw`text-gray-700 text-base`}
`;

const H2 = styled.h2`
  ${BasicPadding}
`;

const H4 = styled.h4`
  ${BasicPadding}
  ${BasicText}
`;

/**
 * Also, we can use `css`.
 */
const CardStyle = css`
  ${tw`w-sm max-w-lg rounded overflow-hidden shadow-xl`}
  font-family: 'Noto Sans KR';
  margin: auto;
`;

const Image = css`
  ${tw`w-full`}
`;
const Card = styled.div`
  ${CardStyle}
`;
const FlexCol = styled.div`
  ${tw`flex flex-col w-full text-center bg-gray-200`}
`;

export { FlexCol, Header, HeaderText, Card, Button, H4, H2 };
