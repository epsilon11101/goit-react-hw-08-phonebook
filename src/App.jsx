import Nav from "./components/Nav";
import "./App.css";
import Container from "@mui/material/Container";
import MainLayout from "./pages/MainLayout";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <Container
      sx={{
        backgroundColor: "#F24C3D",
      }}
      maxWidth="xl"
    >
      <Nav />
      {/* <MainLayout /> */}
      <Contacts />
    </Container>
  );
}

export default App;
