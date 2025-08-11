import RoutesApp from "./route/route";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <>
        <ToastContainer autoClose={3000} />
        <RoutesApp />
      </>
    </AuthProvider>
  );
}

export default App;
