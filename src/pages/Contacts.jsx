import { Container, Typography } from "@mui/material";
import Contact from "../components/Contact";
import ContactInfo from "../components/ContactInfo";

const Contacts = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {/* <Typography
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
      <Contact variant={false} /> */}

      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          color: "white",
          fontSize: "1.5rem",
        }}
      >
        Contact
      </Typography>
      <ContactInfo
        fullName="aaron miranda victorino"
        phoneNumber="3328695850"
      />
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          color: "white",
          fontSize: "1.5rem",
        }}
      >
        New Contact
      </Typography>
      <ContactInfo fullName="" phoneNumber="" />
    </Container>
  );
};

export default Contacts;
