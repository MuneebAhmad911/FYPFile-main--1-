/* eslint-disable react/prop-types */
import useEscrowContext from "./Hooks/useEscrowContext";

// Provider component
export const EscrowProvider = ({ children }) => {
  const {
    user,
    setUser,
    escrowHistory,
    setEscrowHistory,
    isUserLoggedIn,
    setIsUserLoggedIn,
    addEscrowTransaction,
    deleteEscrowTransaction,
    updateDisputeDetails,
    EscrowHistoryContext,
    UserContext,
    IsUserLoggedIn,
  } = useEscrowContext();
  return (
    <EscrowHistoryContext.Provider
      value={{
        escrowHistory,
        setEscrowHistory,
        updateDisputeDetails,
        addEscrowTransaction,
        deleteEscrowTransaction,
      }}
    >
      <IsUserLoggedIn.Provider value={{ isUserLoggedIn, setIsUserLoggedIn }}>
        <UserContext.Provider value={{ user, setUser }}>
          {children}
        </UserContext.Provider>
      </IsUserLoggedIn.Provider>
    </EscrowHistoryContext.Provider>
  );
};
