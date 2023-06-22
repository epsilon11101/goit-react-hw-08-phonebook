import { Container, Typography } from "@mui/material";
import ContactInfo from "../components/ContactInfo";
const ContactInfoPage = () => {
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
        Contact
      </Typography>
      <ContactInfo
        fullName="aaron miranda victorino"
        phoneNumber="3328695850"
      />
    </Container>
  );
};

export default ContactInfoPage;
