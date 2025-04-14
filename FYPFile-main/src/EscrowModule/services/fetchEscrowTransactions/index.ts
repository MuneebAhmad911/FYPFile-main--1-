import axios from "axios";

export const fetchEscrowTransactions = async (
  backendAPI: string,
  userId: string
) => {
  try {
    const response = await axios.get(`${backendAPI}?userId=${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching escrow transactions:", error);
    throw error;
  }
};
