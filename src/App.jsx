import { ChakraProvider } from "@chakra-ui/react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<SignUpForm />} />
          <Route exact path="/Login" element={<LoginForm />} />
          <Route exact path="/Home" element={<Home />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
