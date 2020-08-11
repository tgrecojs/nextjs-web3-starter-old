import App from 'next/app';
import React from 'react';
import Head from 'next/head';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          {/* <link
            href="https://fonts.googleapis.com/css?family=Cabin|Noto+Sans+KR&display=swap"
            rel="stylesheet"
          /> */}
          <style jsx global>
            {`
              body {
                margin: 0;
              }
            `}
          </style>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
