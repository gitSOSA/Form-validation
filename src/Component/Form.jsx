import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../Form.css";

const Form = () => {
  const schema = yup.object().shape({
    FullName: yup.string().required("Your full name is required"),
    Email: yup.string().email().required("Not an email"),
    Age: yup
      .number()
      .positive()
      .integer()
      .min(18)
      .required("Age must be more 18"),
    Password: yup
      .string()
      .min(4)
      .max(16)
      .required("Password must be more 4 o less than 16 16 characters"),
    ConfirmPassword: yup
      .string()
      .oneOf([yup.ref("Password"), null, "Password don't match"])
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border backdrop-opacity-10 bg-white/30 shadow-md shadow-black/50 w-5/6 md:w-1/2  h-5/6  p-6 flex justify-between items-center flex-col"
    >
      <input
        type="text"
        placeholder="Full name"
        {...register("FullName")}
        className="input-class"
      />
      <p>{errors.FullName?.message}</p>
      <input
        type="text"
        placeholder="Email"
        {...register("Email")}
        className="input-class"
      />
      <p>{errors.Email?.message}</p>
      <input
        type="number"
        placeholder="Age"
        {...register("Age")}
        className="input-class"
      />
      <p>{errors.Age?.message}</p>
      <input
        type="password"
        placeholder="Password"
        {...register("Password")}
        className="input-class"
      />
      <p>{errors.Password?.message}</p>
      <input
        type="password"
        placeholder="Confirm password"
        {...register("ConfirmPassword")}
        className="input-class"
      />
      <p>{errors.ConfirmPassword?.message}</p>
      <input
        type="submit"
        className="w-1/2 bg-green-800 h-10 cursor-pointer hover:bg-transparent hover:border transition-all"
      />
    </form>
  );
};

export default Form;
