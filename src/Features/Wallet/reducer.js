import dsm from "redux-dsm";

const fetchTokenStates = [
  "initial",
  "idle",
  [
    "fetch wallet",
    "fetching",
    ["report error", "error", ["handle error", "idle"]],
    ["report success", "success", ["handle success", "idle"]]
  ]
];

const ethereumWalletDSM = dsm({
  component: "userWallet",
  description: "fetch token",
  actionStates: fetchTokenStates
});

const {
  actionCreators: {
    fetchWallet,
    reportError,
    reportSuccess,
    handleSuccess,
    handleError
  },
  reducer
} = ethereumWalletDSM;

export {
  fetchWallet,
  reportError,
  reportSuccess,
  handleSuccess,
  handleError,
  reducer
};

export default ethereumWalletDSM;
