import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Store from "./pages/Store";
import About from "./pages/About";
import Home from "./pages/Home";
import NavigationBar from "./components/NavigationBar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";


function App() {
  return (
    <ShoppingCartProvider>
      <NavigationBar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
