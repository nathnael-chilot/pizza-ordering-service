import { Button, Checkbox, FormControlLabel } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form"; // You will need to install this package
import { zodResolver } from "@hookform/resolvers/zod"; // You will need to install this package
import axios from "axios"; // You will need to install this package

// Validation schema using Zod
const signupSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z
    .string()
    .min(8, "Confirm Password must be at least 8 characters"),
  location: z.string().nonempty("Location is required"),
  phoneNumber: z.string().nonempty("Phone Number is required"),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

const SlotsSignUp = () => {
  const [checked, setChecked] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          ...data,
          agreeToTerms: checked,
        }
      );
      console.log("Response:", response);
      // Handle success - e.g., navigate to login page
      window.location.href = "/login";
    } catch (error) {
      console.error("Error during registration:", error.response?.data);
    }
  };

  const handleCheck = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="w-[552px] mx-auto mt-10 p-6 bg-white rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <div className="mt-1 flex items-center border rounded-md">
            <input
              type="email"
              {...register("email")}
              placeholder="john@gmail.com"
              className="w-full p-2 border-0 outline-none"
              required
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="mt-1 flex items-center border rounded-md">
            <input
              type="password"
              {...register("password")}
              placeholder="••••••••"
              className="w-full p-2 border-0 outline-none"
              required
            />
          </div>
          {errors.password && (
            <p className="text-red-500 text-xs">{errors.password.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <div className="mt-1 flex items-center border rounded-md">
            <input
              type="password"
              {...register("confirmPassword")}
              placeholder="••••••••"
              className="w-full p-2 border-0 outline-none"
              required
            />
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            {...register("location")}
            placeholder="New York, USA"
            className="w-full p-2 border rounded-md"
            required
          />
          {errors.location && (
            <p className="text-red-500 text-xs">{errors.location.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="text"
            {...register("phoneNumber")}
            placeholder="+1 123 456 7890"
            className="w-full p-2 border rounded-md"
            required
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-xs">{errors.phoneNumber.message}</p>
          )}
        </div>

        <TermsCheckbox
          checked={checked}
          handleCheck={handleCheck}
          register={register}
        />

        <SignUpButton disabled={!checked} />
        <SignInLink />
      </form>
    </div>
  );
};

const TermsCheckbox = ({ checked, handleCheck, register }) => {
  return (
    <div className="mb-4">
      <FormControlLabel
        control={
          <Checkbox
            {...register("terms")}
            checked={checked}
            onChange={handleCheck}
            color="primary"
          />
        }
        label={
          <span className="text-sm text-gray-700">
            I agree to the{" "}
            <Link to="/terms" className="text-orange-500 hover:underline">
              Terms and Conditions
            </Link>
          </span>
        }
      />
    </div>
  );
};

const SignUpButton = ({ disabled }) => {
  return (
    <Button
      type="submit"
      variant="outlined"
      color="info"
      size="small"
      disableElevation
      fullWidth
      disabled={disabled}
      sx={{
        padding: "8px 22px",
        gap: 0,
        borderRadius: "var(--borderRadius)",
        opacity: 1,
        backgroundColor: disabled ? "#ccc" : "#FF8100",
        boxShadow: `0px 3px 1px -2px #00000033,
                0px 2px 2px 0px #00000024,
                0px 1px 5px 0px #0000001F`,
        "&:hover": {
          backgroundColor: disabled ? "#ccc" : "#FF8100",
        },
        transition: "all 300ms ease-out",
      }}
    >
      <span className="text-white">Sign Up</span>
    </Button>
  );
};

const SignInLink = () => {
  return (
    <p className="text-sm text-center text-gray-500 mt-4">
      Already have an account?{" "}
      <Link to="/login" className="text-orange-500 hover:underline">
        Sign In
      </Link>
    </p>
  );
};

export default SlotsSignUp;
