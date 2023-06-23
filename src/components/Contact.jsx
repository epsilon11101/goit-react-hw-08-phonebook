import { Avatar, Box, Card, CardHeader, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import css from "./Contact.module.css";

import { Link, useNavigate } from "react-router-dom";

const Contact = ({ variant, name, onDelete }) => {
  const navigate = useNavigate();

  const onUserSettings = () => {
    navigate(`/contact-info/${name}`);
  };

  const onDeleteUser = () => {
    onDelete(name);
  };

  return (
    <Box className={css.container}>
      <Card sx={{ maxWidth: 500 }}>
        <CardHeader
          className={!variant ? css.cardHeader : css.cardHeader__variant}
          avatar={
            <Avatar
              className={!variant ? css.avatar : css.avatar__variant}
              aria-label="recipe"
            >
              A
            </Avatar>
          }
          action={
            <Box>
              <IconButton aria-label="settings" onClick={onUserSettings}>
                <EditIcon
                  className={
                    !variant ? css.pendingIcon : css.pendingIcon__variant
                  }
                />
              </IconButton>
              <IconButton aria-label="settings" onClick={onDeleteUser}>
                <DeleteIcon
                  className={
                    !variant ? css.pendingIcon : css.pendingIcon__variant
                  }
                />
              </IconButton>
            </Box>
          }
          title={name}
        />
      </Card>
    </Box>
  );
};

export default Contact;
