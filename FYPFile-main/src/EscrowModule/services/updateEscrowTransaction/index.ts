import axios from "axios";

interface InputProps {
  id: string;
  updatedTransaction: {};
}
export const updateTransaction = async ({
  id,
  updatedTransaction,
}: InputProps) => {
  try {
    console.log("transaction id is: ", id);
    console.log("updated Data is: ", updatedTransaction);
    const response = await axios.put(
      `http://localhost:5000/api/escrow/${id}`,
      updatedTransaction,
      { headers: { "Content-Type": "application/json" } }
    );
    console.log("Transaction Updated:", response.data);
  } catch (error) {
    console.error("Error updating transaction:", error.response?.data || error);
  }
};

export default updateTransaction;
