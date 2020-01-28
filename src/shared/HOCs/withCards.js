import React from 'react';

const withShuffledDeck = ComposedComponent => {
  return class HOC extends React.Component {
    componentDidMount() {
      this.props.onShuffleCards();
    }
    render() {
      return <ComposedComponent {...this.props} />;
    }
  };
};

export default withShuffledDeck;
