import React from 'react';
import { ThemeProvider } from 'emotion-theming';

const theme = {
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#05a',
    accent: '#609',
    muted: '#f6f6f6f',
    darkTheme: {
      darkBlue: '#094074', // dark cerulean
      lightBlue: '#3C6997', // queen blue
      dark: '#202A25', //charleston green
      purple: '#5F4BB6', // plump purpple
      light: '#86A5D9'
    },
    blues: {
      deepAqua: '#11807f',
      darkBlue: '#043367',
      darkBlueLight: '#00417f'
    },
    pink: '#f3194c', // paradise pink
    orange: '#fe5f55', // sunset orange
    teagreen: '#c7efcf', // teagreen
    beige: '#eef5db', //beige
    twilight: '#585389'
  },
  shadows: {
    light: '0 0 4px rgba(0, 0, 0, 0.125)'
  },
  fonts: {
    body: "'Noto Sans KR', sans-serif",
    heading: 'Cabin, sans-serif',
    monospace: 'Cabin, sans-serif'
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  styles: {
    h1: {
      variant: 'text.heading',
      fontSize: 5
    },
    h2: {
      variant: 'text.heading',
      fontSize: 5
    }
  }
};

const {
  colors: { darkTheme }
} = theme;

const withTheme = ComposedComponent => {
  return class HOC extends React.Component {
    render() {
      console.log('noo, withTheme is first');

      return (
        <ThemeProvider theme={theme}>
          <ComposedComponent {...this.props} />
        </ThemeProvider>
      );
    }
  };
};

// export default props =>
//   <ThemeProvider theme={theme}>
//     {props.children}
//   </ThemeProvider>
export default withTheme;
