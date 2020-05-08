import App from 'next/app';
import React from 'react';
import withReduxStore from '../../lib/with-redux-store';
import Head from 'next/head';
import { Provider } from 'react-redux';

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Cabin|Noto+Sans+KR&display=swap"
            rel="stylesheet"
          />
          <style jsx global>
            {`
              @font-face {
                font-family: 'NSK';
                src: 'Noto Sans KR';
              }

              body {
                margin: 0;
                background-color: cornflowerblue;
              }

              body,
              * {
                font-family: 'NSK';
              }
            `}
          </style>
        </Head>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </>
    );
  }
}

export default withReduxStore(MyApp);
