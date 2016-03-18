requirejs(['utils-browser'], function(utils) {
  console.log(utils.createTx({
    nonce: 0,
    data: '0x123456',
    gasLimit: 1000000,
    gasPrice: 500000,
    pkey: utils.sha3('cow')
  }));
});
