import 'dotenv/config';
import { BigNumber, ethers } from "ethers";

// const wallet = ethers.Wallet.createRandom();

// console.log('address:', wallet.address);
// console.log('private key:', wallet.privateKey);
// console.log('mnemonic:', wallet.mnemonic.phrase);

// let path, myWallet;

// for (let i=0; i<10; i++) {
//   path = `m/44'/60'/0'/0/${i}`;
//   myWallet = ethers.Wallet.fromMnemonic(wallet.mnemonic.phrase, path);
//   console.log('address:', i, myWallet.address);
//   console.log('private key:', i, myWallet.privateKey);
// }

const infuraUrl = `https://goerli.infura.io/v3/${process.env.INFURA_KEY}`;
const provider = new ethers.providers.JsonRpcProvider(infuraUrl);


const signer = new ethers.Wallet(process.env.MY_WALLET_PRIVATE_KEY, provider);

const myBalance = await provider.getBalance(signer.address);

console.log('Signer address', signer.address);

console.log(
  'Goerli balance', 
  ethers.utils.formatEther(myBalance)
);

const tenPercentOfBalance = myBalance.div(BigNumber.from(10));

console.log('Amount to send: ', ethers.utils.formatEther(tenPercentOfBalance));

// const signature = await wallet.signMessage('Hola!');
// console.log('Signed message', signature);

// const signerAddress = ethers.utils.verifyMessage('Hola!', signature);
// console.log('Signer address: ', signerAddress);

const tx = await signer.sendTransaction({
  to: '0x86521291543856554bb50690378100f87Abba719',
  value: tenPercentOfBalance
});

console.log('TX sent!', tx);

await tx.wait();

console.log('TX confirmed!');