import { Container, Typography } from "@mui/material";

import ContactInfo from "../components/ContactInfo";

const NewContact = () => {
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
          color: "black",
          fontSize: "1.5rem",
        }}
      >
        New Contact
      </Typography>
      <ContactInfo fullName="" phoneNumber="" />
    </Container>
  );
};

export default NewContact;
