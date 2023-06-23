import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";

import css from "./User.module.css";

const User = ({ name, email }) => {
  return (
    <Box className={css.wrapper}>
      <Typography
        variant="h3"
        component="h1"
        align="center"
        className={css.title}
      >
        Welcome <span>{name}</span>
      </Typography>
      <Card className={css.card} sx={{ maxWidth: 345 }}>
        <CardHeader
          className={css.header}
          subheader={email}
          avatar={
            <Avatar className={css.avatar}>{name[0].toUpperCase()}</Avatar>
          }
        />
        <CardContent className={css.content}>
          <Box className={css.imgwrapper}>
            <img src="https://picsum.photos/300/300/" alt="avatar" />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default User;
