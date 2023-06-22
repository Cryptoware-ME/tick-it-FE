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

  const ticketTypeAmount = readContractCall({
    address: contractAddress,
    abi: NFTix721.abi,
    method: "ticketTypes",
  });
  const editTicketPrice = writeContractCall({
    address: contractAddress,
    abi: NFTix721.abi,
    method: "changeTicketPrice",
  });

  return { addTicket, ticketTypeAmount, editTicketPrice };
};

export const usePause = ({ contractAddress, refetchEvent }) => {
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
    enabled: refetchEvent,
  });

  return { pause, unpause, paused };
};
