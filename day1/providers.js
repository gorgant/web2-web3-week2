import 'dotenv/config';
import { BigNumber, ethers } from "ethers";

const infuraUrl = `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`
const provider = new ethers.providers.JsonRpcProvider(infuraUrl);

// console.log('Current block number', await provider.getBlockNumber());

// console.log('Address of ENS name', await provider.resolveName("atg.eth"));
// console.log('ENS name of address', await provider.lookupAddress("0x34aA3F359A9D614239015126635CE7732c18fDF3"));

const vitalikBalance = await provider.getBalance("vitalik.eth");
let sanfordBalance = await provider.getBalance("sanfordstout.eth");
sanfordBalance = sanfordBalance.add(ethers.utils.parseEther("5000"));

if (vitalikBalance.gt(sanfordBalance)) {
  console.log(`Vitalik has more ETH than Sanford. Vitalik: ${vitalikBalance}, Sanford: ${sanfordBalance}`);
} else {
  console.log(`Sanford has more ETH than Vitalik. Vitalik: ${vitalikBalance}, Sanford: ${sanfordBalance}`);
}

// console.log('vitalik.eth has this much eth:', ethers.utils.formatEther(vitalikBalance));

// console.log('1.5 ETH is', ethers.utils.parseEther("1.5").toString(), "wei");

