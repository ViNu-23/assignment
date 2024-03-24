import { ChakraProvider } from "@chakra-ui/react";
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import useStore from './assets/useStore';

const App = () => {
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<SignUpForm />} />
          <Route exact path="/Signup" element={<SignUpForm />} />
          <Route exact path="/Login" element={<LoginForm />} />
          <Route path="/Home" element={isLoggedIn ? <Home /> : <Navigate to="/Login" />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
