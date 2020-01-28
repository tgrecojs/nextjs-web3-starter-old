import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import web3 providers
import { Flex, Box, Text, Heading } from 'rebass';
import ImageBox from '../shared/UI/Box';

const Wallet = ({ balance }) => {
  console.log('after effect ## web3');

  console.log('props');
  return (
    <Flex bg="pink" flexWrap="wrap" p={10}>
      <Box width={[1, 7 / 8]} px={2}>
        <ImageBox title="Access to All Ethereum Assets" />
        <Text
          as="h3"
          sx={{
            fontFamily: 'Cabin'
          }}
        >
          Eth balance:{' '}
          {balance && balance.length > 1 ? `${bal().slice(0, 10)}` : null}
        </Text>
      </Box>
    </Flex>
  );
};

export default Wallet;
