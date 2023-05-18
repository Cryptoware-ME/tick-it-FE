import { getChainById, ChainId, EvmWallets } from "@cryptogate/react-providers";
import NFTix721 from "../abis/NFTix721.json";
import NFTixLaunchpad from "../abis/NFTixLaunchpad.json";
const ethConfig = {
  defaultNetwork: getChainById(ChainId.Sepolia),
  allowedNetworks: [getChainById(ChainId.Sepolia)],
  contractList: [
    {
      name: "NFTix721",
      abi: NFTix721.abi,
      addresses: {
        [ChainId.Sepolia]:
          process.env.NEXT_PUBLIC_SEPOLIA_NFTIX721_CONTRACT_ADDRESS,
      },
    },
    {
      name: "NFTixLaunchpad",
      abi: NFTixLaunchpad.abi,
      addresses: {
        [ChainId.Sepolia]:
          process.env.NEXT_PUBLIC_SEPOLIA_LAUNCHPAD_CONTRACT_ADDRESS,
      },
    },
  ],
  readOnlyUrls: {
    [ChainId.Sepolia]: `https://sepolia.infura.io/v3/98d5cf1c763f4224afa492b70366effa`,
  },
  wallets: EvmWallets.ALL,
};
export default ethConfig;
