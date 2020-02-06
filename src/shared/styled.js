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
  ${tw`h-screen bg-teal-200`}
`;
const CardStyle = css`
  ${tw`flex flex-col shadow-xl bg-purple-300 rounded-lg m-2 p-6`}
`;

const Card = styled.div`
  ${tw`font-mono text-left h-1/2 `}
  ${CardStyle}
`;

const formStyles = css`
  ${tw`rounded-lg text-black text-lg flex flex-col justify-around font-mono
  border-purple-300 bg-blue-500 p-6 m-2 `}
`;
const Form = styled.form`
  ${formStyles}
  border: 1.5px solid;
  div {
    margin: 2px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding: 8px;
  }
  label {
    max-width: 40%
  }

  input {
    min-width: 70%
    margin-top: 5px;
    font-size: 16px;
    border-radius: 3px;
    padding: 5px;
  }
`;
/**
 * We can use macros in `styled`.
 */
const Header = styled.div`
  ${tw`font-mono text-lg text-gray-800 hover:text-red-500`}
`;

export { Button, Card, CardStyle, Header, Layout, Form };
