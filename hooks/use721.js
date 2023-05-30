import { writeContractCall } from "@cryptogate/react-providers";
import NFTix721 from "../abis/NFTix721.json"

export const use721 = ({contractAddress}) => {
    console.log(contractAddress)
    const addTicket = writeContractCall({
        address: contractAddress,
        abi: NFTix721.abi,
        method: "addTicketTypes",
    })

    return {addTicket};
} 

