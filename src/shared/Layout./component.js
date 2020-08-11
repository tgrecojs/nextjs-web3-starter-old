import { Layout } from '../styled';
import { Global, css } from '@emotion/core';

const Wrapper = ({ children }) => {
  return (
    <Layout className="wrapper">
      <Global
        styles={css`
          body {
            margin: 0;
          }
          .wrapper {
            display: flex;
            min-height: 100vh;
            flex-direction: column;
          }

          .content {
            flex: 1;
          }
        `}
      />
      <div className="content">{children}</div>
    </Layout>
  );
};

export default Wrapper;
