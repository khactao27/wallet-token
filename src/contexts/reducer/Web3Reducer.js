const initState = {
  account: "",
  web3: null,
  network: "",
  connect: false,
  balance: 0,
  status: 'not connected'
};

export const CONNECT = "connect"
export const UPDATE_ACCOUNT = "update_account"
export const UPDATE_NETWORK = "update_network"

export const web3Action = (type, payload) => ({
  type,
  payload
})

function Web3Reducer(state, action) {
  switch(action.type) {
    case CONNECT:
      return {...state, ...action.payload, account: "HEHHE", network: "Ethereum", connect: true, balance: "1000" }
    case UPDATE_ACCOUNT:
      return {}
    case UPDATE_NETWORK:
      return {}
    default:
      return state
  }
}


export { initState };
export default Web3Reducer;
