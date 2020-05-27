require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock brand ten index rate mad attitude good kangaroo army genre'; 
let testAccounts = [
"0x6acf883b69787093ef172e66724d6a9da20808218f9a592c221a05691e72567b",
"0xf7a1142aee635ea390737ae6143fa1ed6745b66af9e43eddce323b09abe8c379",
"0xf53533ec0e13c6016d10772706e1cd5f0235d949bf6afe8f3b8a790eba7cfab6",
"0x961e7397bef90e54c79de84390ca59752e7f6bab3d4dea3018fae324b31f82a0",
"0xbe001436c4bc12a2b2eb755a20d9dc61eaadcb0960ba37cc34749adda334a210",
"0x631fe66be8584d9223f15753e79a4825f45635ce9b0ef60e1a96478b8c7d17d3",
"0xf1f74c6a37762c252af31b1b2667ea0b82379e86cd34ed67dbb40f8be579a59b",
"0xa876178eeea25c4cbb5f8225ca3ac3c4f209a1959264b03b2e24d8aa73ba2183",
"0x1241e24928008ab91fd24dd95bcc7f6092f26a8b44c63a88c30d35d710f35d13",
"0xe2c51d3f472fc440153f180ab6c11dd52ca7543378eb2cf8e2a0113786edb9a3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
