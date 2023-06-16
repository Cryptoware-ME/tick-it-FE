import {
  writeContractCall,
  readContractCall,
} from "@cryptogate/react-providers";
import NFTix721 from "../abis/NFTix721.json";

export const use721 = ({ contractAddress }) => {
  const addTicket = writeContractCall({
    address: contractAddress,
    abi: NFTix721.abi,
    method: "addTicketTypes",
  });

  const ticketTypeAmount =readContractCall({
    address: contractAddress,
    abi: NFTix721.abi,
    method: "ticketTypes"
  })

  return { addTicket, ticketTypeAmount };
};

export const usePause = ({ contractAddress }) => {
  const pause = writeContractCall({
    address: contractAddress,
    abi: NFTix721.abi,
    method: "pause",
  });

  const unpause = writeContractCall({
    address: contractAddress,
    abi: NFTix721.abi,
    method: "unpause",
  });
  const paused = readContractCall({
    address: contractAddress,
    abi: NFTix721.abi,
    method: "paused",
  });

  return { pause, unpause, paused };
};
