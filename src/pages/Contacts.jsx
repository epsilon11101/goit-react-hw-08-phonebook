import { Container, Typography } from "@mui/material";
import Contact from "../components/Contact";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts, deleteContact } from "../store/contacts/operations";
import { getContacts } from "../store/contacts/selectors";

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDelete = (name) => {
    const contactId = contacts.find((contact) => contact.name === name).id;
    dispatch(deleteContact(contactId));
  };

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
        Contacts List
      </Typography>

      {/* CONTACTS LIST */}

      {contacts &&
        contacts.map((contact, i) => (
          <Contact
            key={contact.id}
            variant={i % 2 === 0 ? true : false}
            name={contact.name}
            phoneNumber={contact.phoneNumber}
            onDelete={onDelete}
          />
        ))}

      {/* ADD NEW CONTACT BUTTON */}
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
