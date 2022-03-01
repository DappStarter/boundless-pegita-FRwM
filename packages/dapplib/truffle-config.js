require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune silver shock rifle smile puppy grace deputy fringe search'; 
let testAccounts = [
"0xdfddd13af6d4dbd38ba7383578fed34909f558b2dde99aad52608c83d4441122",
"0x74652944a2d35c4496d224c124ea6195b133e7175f6928d5b624ab1a07b3751a",
"0x7fe870a98dd2c88905ab46c4280fd01139413007bd9932d51cabba6877f93102",
"0x1630b7172cb74ea823369d6882ae0088a0888b479f35a2a35ce92555399c9b86",
"0x912cf90a67e29cb0a020dc418651ec4a6504d3487ce2f17c340f19d66ec1235a",
"0x3fb1a3f5590406d76c96c37b7e3928c1fbe7df511882ce03b427ffd99e11b6ca",
"0xf72ecf0f0d23892da1904174721a70884712446117ff5fe95800b23356581810",
"0x9c6e90a3dfddce970750ab2453c4794b97927caf5dec73099bb16544defd069c",
"0x7653c312dc934007738a3c22373f30512497c60cecd50af0f047365411e86219",
"0x9c55041cc9943d430312af03ee4ed5f50743bbefd532ddd9eadb78b647a7d7f7"
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
            version: '^0.8.0'
        }
    }
};

