import 'dotenv/config';
import { ethers } from "ethers";

const getProvider = (mainnet = false) => {
  const providerUrl = mainnet 
    ? `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}` 
    : `https://goerli.infura.io/v3/${process.env.INFURA_KEY}` 

  return new ethers.providers.JsonRpcProvider(providerUrl);
}
// const provider = getProvider(true);
// console.log('Provider: ', provider.getNetwork());

const generateNewWallet = () => {
  // 0xCd733AD0F11d77a5DBA14cA4B19615EB73AdD761
  const wallet = ethers.Wallet.createRandom();

  console.log('address:', wallet.address);
  console.log('private key:', wallet.privateKey);
  console.log('mnemonic:', wallet.mnemonic.phrase);
}
// generateNewWallet();

const getSigner = (mainnet = false) => {
  const provider = getProvider(mainnet);
  const signer = new ethers.Wallet(process.env.MY_WALLET_PRIVATE_KEY, provider);
  return signer;
}
// const signer = getSigner();
// console.log('Signer: ', await signer.getAddress());

export { getProvider, getSigner, generateNewWallet };




