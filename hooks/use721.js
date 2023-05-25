import { writeContractCall } from "@cryptogate/react-providers";

export const mint = writeContractCall({
    contract: "NFTix721",
    method: "mint",
});
