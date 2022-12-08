import { BigNumber, ethers } from "ethers";
import { getProvider, getSigner } from "./utils.js";

const mainnetProvider = getProvider(true);
const goerliSigner = getSigner();

const myBalance = await goerliSigner.getBalance();

console.log('My balance: ', ethers.utils.formatEther(myBalance));

const tenPercentOfBalance = myBalance.div(BigNumber.from(10));

const tx = await goerliSigner.sendTransaction({
  to: '0x86521291543856554bb50690378100f87Abba719',
  value: tenPercentOfBalance
});

console.log('TX sent!', tx);

await tx.wait();

console.log('TX confirmed!');