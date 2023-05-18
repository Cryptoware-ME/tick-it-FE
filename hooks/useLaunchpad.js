import { writeContractCall } from "@cryptogate/react-providers";

export const useLaunpad = () => {
  const createEvent = writeContractCall({
    contract: "NFTixLaunchpad",
    method: "createERC721",
  });

  return {
    createEvent,
  };
};
