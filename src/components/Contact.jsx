import { Avatar, Box, Card, CardHeader, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import css from "./Contact.module.css";

const Contact = ({ variant }) => {
  return (
    <Box className={css.container}>
      <Card>
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
            <IconButton aria-label="settings">
              <MoreVertIcon
                className={
                  !variant ? css.pendingIcon : css.pendingIcon__variant
                }
              />
            </IconButton>
          }
          title="Aaron Miranda V."
        />
      </Card>
    </Box>
  );
};

export default Contact;
