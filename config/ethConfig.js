import { getChainById, ChainId, EvmWallets } from "@cryptogate/react-providers";

const ethConfig = {
  defaultNetwork: getChainById(ChainId.Sepolia),
  allowedNetworks: [getChainById(ChainId.Sepolia)],
  readOnlyUrls: {
    [ChainId.Sepolia]: `https://sepolia.infura.io/v3/98d5cf1c763f4224afa492b70366effa`,
  },
  wallets: EvmWallets.ALL,
};
export default ethConfig;
