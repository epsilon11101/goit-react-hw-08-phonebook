import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import EditOffIcon from "@mui/icons-material/EditOff";
import { useForm } from "react-hook-form";
import css from "./ContactInfo.module.css";
import { Fullscreen } from "@mui/icons-material";

const ContactInfo = ({ fullName }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

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
              <EditOffIcon
                className={
                  !variant ? css.pendingIcon : css.pendingIcon__variant
                }
              />
            </IconButton>
          }
          title={fullName}
        />
        <CardContent>
          <form>
            <input
              defaultValue={fullName}
              placeholder="fullName"
              {...register("fullName", { required: true })}
            />
            {errors.fullName && <span>This field is required</span>}
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ContactInfo;

//TODO:finished this component
