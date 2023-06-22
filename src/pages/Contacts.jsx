import { Container, Typography } from "@mui/material";
import Contact from "../components/Contact";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
const Contacts = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          color: "white",
          fontSize: "1.5rem",
        }}
      >
        Contacts List
      </Typography>
      <Contact variant={true} />
      <Contact variant={false} />
      <Contact variant={true} />
      <Contact variant={false} />
      <Contact variant={true} />
      <Contact variant={false} />
      <Contact variant={true} />
      <Contact variant={false} />
      <Box
        sx={{ "& > :not(style)": { m: 1 } }}
        style={{ position: "fixed", bottom: "1rem", right: "1rem" }}
      >
        <Fab
          size="small"
          aria-label="add"
          style={{
            backgroundColor: "#F24C3D",
          }}
        >
          <Link
            style={{
              textDecoration: "none",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            to={"/new-contact"}
          >
            <AddIcon />
          </Link>
        </Fab>
      </Box>
    </Container>
  );
};

export default Contacts;
