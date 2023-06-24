import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
function App() {
  return (
    <>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
      </ChakraProvider>
    </>
  );
}

export default App;
