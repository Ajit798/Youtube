import {
  Alert,
  Box,
  Button,
  Card,
  Grid,
  Snackbar,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import React, { useRef } from "react";
import emailsjs from "emailjs-com";
import { forwardRef } from "react";

function ContactUs(props, ref) {
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    emailsjs
      .sendForm(
        "service_zrft0hq",
        "template_m5dewq9",
        ref.current !== undefined ? ref.current : "",
        "33AvBe7PzPO0-KMaN"
      )
      .then((result) => {
        setOpen(true);
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      })
      .catch((error) => console.log(error));

    event.target.reset();
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleClosed = () => {
    setOpen(false);
  };
  return (
    <Grid
      container
      md={8}
      sm={9}
      xs={9}
      justifyContent="center"
      alignItems="center"
      marginTop={3}
      spacing={4}
      ref={ref}
    >
      <Grid
        item
        container
        md={12}
        sm={12}
        justifyContent="center"
        alignItems={"center"}
      >
        <Typography
          variant="h5"
          textAlign="center"
          justifyContent="center"
          sx={{
            backgroundColor: "#181e1e",
            color: "white",
            borderRadius: "16px",
            pt: 1,
            pl: 4,
            pr: 4,
            pb: 1
          }}
        >
          What Can I Do
        </Typography>
      </Grid>
      <Grid
        item
        container
        md={12}
        sm={12}
        justifyContent="center"
        alignItems={"center"}
        padding={2}
      >
        <Typography
          variant="h6"
          color="yellow"
          textAlign="center"
          justifyContent="center"
          marginTop={-2}
        >
          Contact Me
        </Typography>
      </Grid>
      <Card
        sx={{
          padding: 4,
          borderRadius: "12px",
          backgroundColor: "#1E1E1E",
          opacity: 0.9,
          justifyContent: "center"
        }}
        elevation={1}
      >
        <Box
          sx={{ width: "100%" }}
          component="form"
          ref={ref}
          onSubmit={handleSubmit}
          justifyContent="center"
        >
          <Grid
            item
            container
            md={12}
            sm={12}
            xs={12}
            spacing={2}
            marginTop={2}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item md={6} sm={12} xs={12}>
              <TextField
                name="name"
                placeholder="Enter Your Full Name"
                type="text"
                fullWidth
                sx={{
                  backgroundColor: "#F9FAFB",
                  "&.MuiTextField-root": {
                    borderRadius: "12px"
                  }
                }}
                required
              />
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <TextField
                name="email"
                type="email"
                placeholder="Enter Your email address"
                fullWidth
                sx={{
                  backgroundColor: "#F9FAFB",
                  "&.MuiTextField-root": {
                    borderRadius: "12px"
                  }
                }}
                required
              />
            </Grid>
            <Grid item md={12} sm={12} xs={12} marginTop={3}>
              <TextField
                name="message"
                placeholder="Message"
                multiline
                rows={6}
                sx={{
                  backgroundColor: "#F9FAFB",
                  "&.MuiTextField-root": {
                    borderRadius: "12px"
                  }
                }}
                fullWidth
                required
              />
            </Grid>
          </Grid>
          <Grid
            item
            md={12}
            sm={8}
            xs={8}
            marginTop={2}
            justifyContent="center"
          >
            <Stack justifyContent="center" alignItems="center">
              <Button
                variant="contained"
                color="error"
                sx={{ borderRadius: "12px" }}
                type="submit"
              >
                Submit
              </Button>
            </Stack>
          </Grid>
          <Snackbar
            open={open}
            autoHideDuration={2000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            color="green"
          >
            <Alert
              onClose={handleClosed}
              severity="success"
              sx={{ width: "100%" }}
            >
              Message was Sent SuccessFully
            </Alert>
          </Snackbar>
        </Box>
      </Card>
    </Grid>
  );
}
export default forwardRef(ContactUs);
