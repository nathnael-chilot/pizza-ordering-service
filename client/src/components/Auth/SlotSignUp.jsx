import { Button, Checkbox, FormControlLabel } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function CustomEmailField() {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
        Email Address
      </label>
      <div className="mt-1 flex items-center border rounded-md">
        <input
          type="email"
          name="email"
          placeholder="john@gmail.com"
          className="w-full p-2 border-0 outline-none"
          required
        />
      </div>
    </div>
  );
}

function CustomPasswordField() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Password</label>
      <div className="mt-1 flex items-center border rounded-md">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="••••••••"
          className="w-full p-2 border-0 outline-none"
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="px-3 focus:outline-none"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}

function ConfirmPasswordField() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
        Confirm Password
      </label>
      <div className="mt-1 flex items-center border rounded-md">
        <input
          type={showPassword ? "text" : "password"}
          name="confirmPassword"
          placeholder="••••••••"
          className="w-full p-2 border-0 outline-none"
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="px-3 focus:outline-none"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}

function LocationField() {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Location</label>
      <input
        type="text"
        name="location"
        placeholder="New York, USA"
        className="w-full p-2 border rounded-md"
        required
      />
    </div>
  );
}

function PhoneNumberField() {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
        Phone Number
      </label>
      <input
        type="text"
        name="phoneNumber"
        placeholder="+1 123 456 7890"
        className="w-full p-2 border rounded-md"
        required
      />
    </div>
  );
}

function TermsCheckbox({ checked, handleCheck }) {
  return (
    <div className="mb-4">
      <FormControlLabel
        control={
          <Checkbox
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
}

function SignUpButton({ disabled }) {
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
      onClick={() => alert("Sign Up button clicked")}
    >
      <span className="text-white">Sign Up</span>
    </Button>
  );
}

function SignInLink() {
  return (
    <p className="text-sm text-center text-gray-500 mt-4">
      Already have an account?{" "}
      <Link to="/login" className="text-orange-500 hover:underline">
        Sign In
      </Link>
    </p>
  );
}

const SlotsSignUp = () => {
  const [checked, setChecked] = useState(false);

  const handleCheck = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="w-[552px] mx-auto mt-10 p-6 bg-white rounded-lg">
      <form>
        <CustomEmailField />
        <CustomPasswordField />
        <ConfirmPasswordField />
        <LocationField />
        <PhoneNumberField />
        <TermsCheckbox checked={checked} handleCheck={handleCheck} />
        <SignUpButton disabled={!checked} />
        <SignInLink />
      </form>
    </div>
  );
};

export default SlotsSignUp;
