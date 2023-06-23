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
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addContact, updateContact } from "../store/contacts/operations";
import { getContacts } from "../store/contacts/selectors";

const ContactInfo = () => {
  const { contactId: fullName } = useParams();
  const dispatch = useDispatch();
  const isNewContact = !fullName;
  const contacts = useSelector(getContacts);
  const [contact, setContact] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: fullName || "",
      number: "",
    },
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (!isNewContact) {
      const contact = contacts.find((contact) => contact.name === fullName);
      setContact(contact);
      setValue("number", contact.number);
      setValue("name", contact.name);
    }
  }, []);

  const onEditHandler = () => {
    setIsEditing((prevState) => !prevState);
  };

  const submitHandler = (data) => {
    if (isNewContact) {
      dispatch(addContact(data));
      setValue("name", "");
      setValue("number", "");
    } else {
      const updatedContact = {
        ...contact,
        name: data.name,
        number: data.number,
      };
      dispatch(updateContact(updatedContact));
      setIsEditing(false);
    }
  };

  return (
    <Box className={css.wrapper}>
      <Card className={css.container} sx={{ maxWidth: 500 }}>
        <CardHeader
          className={css.cardHeader}
          avatar={
            <Avatar className={css.avatar} aria-label="recipe">
              {watch("name")[0]}
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
          title={watch("name")}
        />
        <CardContent>
          <form className={css.form} onSubmit={handleSubmit(submitHandler)}>
            <Box className={css.inputWrapper}>
              <label>Full Name</label>
              <input
                placeholder="Full Name"
                {...register("name", {
                  required: true,
                })}
                disabled={isNewContact ? false : !isEditing}
              />
              {errors.name && <span>This field is required</span>}
            </Box>
            <Box className={css.inputWrapper}>
              <label>Phone Number</label>
              <input
                placeholder="Phone Number"
                {...register("number", {
                  required: true,
                })}
                disabled={isNewContact ? false : !isEditing}
              />
              {errors.number && <span>This field is required</span>}
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
