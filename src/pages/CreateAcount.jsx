import { Card, Box, CardHeader, CardContent } from "@mui/material";
import { useForm } from "react-hook-form";
import css from "./CreateAcount.module.css";

import { useDispatch } from "react-redux";
import { register as userRegister } from "../store/auth/operations";

const CreateAcount = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const dispatch = useDispatch();

  const submitHandler = (data) => {
    console.log(data);
    dispatch(userRegister(data));
  };

  return (
    <Box className={css.container}>
      <Card className={css.card} sx={{ maxWidth: 500 }}>
        <CardHeader title="Sign up" className={css.cardHeader} />
        <CardContent className={css.cardContent}>
          <form onSubmit={handleSubmit(submitHandler)} className={css.form}>
            <Box className={css.inputWrapper}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                })}
              />
            </Box>
            <Box className={css.inputWrapper}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Email is invalid",
                  },
                })}
              />
            </Box>
            <Box className={css.inputWrapper}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
            </Box>
            {errors.email && <span>{errors.email.message}</span>}
            {errors.password && <span>{errors.password.message}</span>}
            {errors.name && <span>{errors.name.message}</span>}
            <button type="submit">Sign up</button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CreateAcount;
