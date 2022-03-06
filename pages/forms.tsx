import React from "react";
import { FieldErrors, SubmitHandler, useForm } from "react-hook-form";

type FormInput = {
  [key: string]: string;
};

export default function Forms() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<FormInput>({
    mode: "onChange",
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
  });

  const [email, userName, password] = watch(["email", "username", "password"]);

  const onValid: SubmitHandler<FormInput> = (data) => {
    console.log(data);
    setError("username", { message: "User already exists" });
  };

  const onInValid = (errors: FieldErrors) => {
    console.log(errors);
  };

  return (
    <form
      className="space-y-2 py-10"
      onSubmit={handleSubmit(onValid, onInValid)}
    >
      <div className="flex flex-col">
        <label>Username</label>
        <input
          {...register("username", {
            required: "Username is required",
            minLength: {
              message: "Username should be longer then 5 chars",
              value: 5,
            },
          })}
          type="text"
          placeholder="Username"
          className={`${
            !!errors.username
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : ""
          }  outline-none focus:outline-none appearance-none `}
        />
        <span className="text-red-500 min-h-[16px]  text-sm">
          {userName.length > 0 ? errors.username?.message : ""}
        </span>
      </div>
      <div className="flex flex-col">
        <label>Email</label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              message: "Please input right email",
              value:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            },
          })}
          type="text"
          placeholder="Email"
        />

        <span className="text-red-500 min-h-[16px] text-sm">
          {email.length > 0 ? errors.email?.message : ""}
        </span>
      </div>
      <div className="flex flex-col">
        <label>Password</label>
        <input
          {...register("password", {
            required: "Password is required",
          })}
          type="password"
          placeholder="Password"
        />
        <span className="text-red-500 min-h-[16px] text-sm">
          {password.length > 0 ? errors.password?.message : ""}
        </span>
      </div>

      <input type="submit" value="Create Account" />
    </form>
  );
}
