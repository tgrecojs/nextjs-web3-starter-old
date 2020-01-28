import { prop } from 'ramda';

const testNets = {
  rink: 'rinkeby',
  rop: 'ropsten',
  kov: 'koven'
};

const getTestnet = (x = 'rink') => prop(x, testNets);

export { getTestnet };
