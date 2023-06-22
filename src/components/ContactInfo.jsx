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
import { useEffect, useState } from "react";

const ContactInfo = ({ fullName, phoneNumber }) => {
  const isNewContact = !fullName && !phoneNumber;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: fullName ? fullName : "",
      phoneNumber: phoneNumber ? phoneNumber : "",
    },
  });

  const [isEditing, setIsEditing] = useState(false);

  const onEditHandler = () => {
    setIsEditing((prevState) => !prevState);
  };

  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <Box>
      <Card className={css.container}>
        <CardHeader
          className={css.cardHeader}
          avatar={
            <Avatar className={css.avatar} aria-label="recipe">
              {watch("fullName")[0]}
            </Avatar>
          }
          action={
            !isNewContact && (
              <IconButton aria-label="settings" onClick={onEditHandler}>
                {(!isEditing && (
                  <EditOffIcon className={css.pendingIcon} />
                )) || <EditIcon className={css.pendingIcon} />}
              </IconButton>
            )
          }
          title={watch("fullName")}
        />
        <CardContent>
          <form className={css.form} onSubmit={handleSubmit(submitHandler)}>
            <Box className={css.inputWrapper}>
              <label>Full Name</label>
              <input
                placeholder="Full Name"
                {...register("fullName", {
                  required: true,
                })}
                disabled={isNewContact ? false : !isEditing}
              />
              {errors.fullName && <span>This field is required</span>}
            </Box>
            <Box className={css.inputWrapper}>
              <label>Phone Number</label>
              <input
                placeholder="Phone Number"
                {...register("phoneNumber", {
                  required: true,
                })}
                disabled={isNewContact ? false : !isEditing}
              />
              {errors.phoneNumber && <span>This field is required</span>}
            </Box>

            <button type="submit" disabled={isNewContact ? false : !isEditing}>
              {isNewContact ? "Add Contact" : "Save"}
            </button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ContactInfo;
