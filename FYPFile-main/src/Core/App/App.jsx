import Routes from "../Routes/Routes";
// import Index from "../../EcommeraceModule/Index";
import { EscrowProvider } from "../../EscrowModule/providers/EscrowContext";
function App() {
  return (
    <>
      <EscrowProvider>
        <Routes />
      </EscrowProvider>
      {/* <Index /> */}
    </>
  );
}

export default App;
