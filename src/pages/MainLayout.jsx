import { Container, Typography } from "@mui/material";

import css from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <Container className={css.container}>
      <Typography variant="h4" className={css.title}>
        Welcome to your new contact notebook!
      </Typography>
      <Typography variant="h6" className={css.p}>
        We are excited to provide you with this tool to help you keep all your
        important contacts in one place. With this notebook, you can easily
        organize the information of your friends, family, colleagues, and anyone
        who is relevant to you. From phone numbers to email addresses and
        personal notes, this notebook will provide you with the convenience and
        peace of mind of having quick access to your entire network of contacts.
      </Typography>
      <Typography variant="h6" className={css.p}>
        Our goal is to simplify and streamline how you manage your contacts. We
        have designed this notebook with intuitive sections and ample space to
        add additional details as needed. Whether you're looking for a contact
        for a business meeting or simply want to send a greeting to a loved one,
        this notebook will be your reliable companion in keeping your
        relationships close.
      </Typography>
      <Typography variant="h6" className={css.p}>
        We hope you enjoy your new contact notebook and find it to be a helpful
        tool in your life! Feel free to explore all the features and
        functionalities available. If you have any questions or need assistance,
        our team will be happy to help. Wishing you an exceptional experience in
        organizing your contacts!
      </Typography>
    </Container>
  );
};

export default MainLayout;
