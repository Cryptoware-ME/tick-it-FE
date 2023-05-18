import { writeContractCall } from "@cryptogate/react-providers";

export const createEvent = writeContractCall({
    contract: "NFTixLaunchpad",
    method: "createERC721",
});