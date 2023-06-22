import { Card, Box, CardHeader, CardContent } from "@mui/material";
import { useForm } from "react-hook-form";
import css from "./Login.module.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <Box>
      <Card className={css.card}>
        <CardHeader title="Login" className={css.cardHeader} />
        <CardContent className={css.cardContent}>
          <form onSubmit={handleSubmit(submitHandler)} className={css.form}>
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
            <button type="submit">Login</button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
