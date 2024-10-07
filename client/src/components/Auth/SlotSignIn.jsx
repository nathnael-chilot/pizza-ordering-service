import * as React from "react";
import axios from "axios";
import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  TextField,
  InputAdornment,
  Link,
  IconButton,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { AppProvider, SignInPage } from "@toolpad/core";
import { useTheme } from "@mui/material/styles";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const providers = [{ id: "credentials", name: "Email and Password" }];

function CustomEmailField() {
  return (
    <TextField
      id="input-with-icon-textfield"
      label="email address"
      name="email"
      type="email"
      size="small"
      placeholder="abebe@gmail.com"
      required
      fullWidth
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle fontSize="inherit" />
            </InputAdornment>
          ),
        },
      }}
      variant="outlined"
    />
  );
}

function CustomPasswordField() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <FormControl sx={{ my: 2 }} fullWidth variant="outlined">
      <InputLabel size="small" htmlFor="outlined-adornment-password">
        Password
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        name="password"
        size="small"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              size="small"
            >
              {showPassword ? (
                <VisibilityOff fontSize="inherit" />
              ) : (
                <Visibility fontSize="inherit" />
              )}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>
  );
}

function CustomButton() {
  const [alert, setAlert] = React.useState(null); // State to manage the alert

  const handleLogin = async () => {
    console.log("Login function triggered");

    const email = document.getElementsByName("email")[0].value;
    const password = document.getElementsByName("password")[0].value;

    console.log("Sending login request...");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      // Handle the successful response by setting an alert
      setAlert({
        severity: "success",
        title: "Success",
        message: "You have successfully logged in!",
      });

      // Redirect to the orders page after a delay (if needed)
      setTimeout(() => {
        window.location.href = "/orders";
      }, 1000);

      console.log("Login successful:", response.data);
    } catch (error) {
      // Set an error alert if login fails
      setAlert({
        severity: "error",
        title: "Error",
        message:
          error.response && error.response.data
            ? error.response.data.message
            : "Login failed. Please try again.",
      });

      console.error(
        "Error during login:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <>
      {/* Conditionally render the alert if it's set */}
      {alert && (
        <Alert severity={alert.severity} onClose={() => setAlert(null)}>
          <AlertTitle>{alert.title}</AlertTitle>
          {alert.message}
        </Alert>
      )}

      <Button
        type="button"
        variant="outlined"
        color="info"
        size="small"
        disableElevation
        fullWidth
        sx={{
          padding: "8px 22px",
          gap: 0,
          borderRadius: "var(--borderRadius)",
          opacity: 1,
          backgroundColor: "#FF8100",
          boxShadow: `0px 3px 1px -2px #00000033,
                0px 2px 2px 0px #00000024,
                0px 1px 5px 0px #0000001F`,
          "&:hover": {
            backgroundColor: "#FF8100",
          },
          transition: "all 300ms ease-out",
        }}
        onClick={handleLogin}
      >
        <span className="text-white">Sign In</span>
      </Button>
    </>
  );
}

function SignUpLink() {
  return (
    <Link href="/register" variant="body2">
      have an account?<span className="text-[#FF8100]">Sign up</span>
    </Link>
  );
}

// function ForgotPasswordLink() {
//   return (
//     <Link href="/" variant="body2">
//       Forgot password?
//     </Link>
//   );
// }

export default function SlotsSignIn() {
  const theme = useTheme();
  return (
    <AppProvider theme={theme}>
      <SignInPage
        signIn={(provider, formData) =>
          alert(
            `Signing in with "${provider.name}" and credentials: ${formData.get(
              "email"
            )}, ${formData.get("password")}`
          )
        }
        slots={{
          emailField: CustomEmailField,
          passwordField: CustomPasswordField,
          submitButton: CustomButton,
          signUpLink: SignUpLink,
          // forgotPasswordLink: ForgotPasswordLink,
        }}
        providers={providers}
      />
    </AppProvider>
  );
}
