import React, { forwardRef } from "react";
import { Grid, Stack, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { TypeAnimation } from "react-type-animation";

function BodyContent(props, ref) {
  return (
    <>
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        marginTop={5}
        md={11}
        sm={11}
        ref={ref}
      >
        <Grid
          item
          container
          md={10}
          sm={9}
          xs={12}
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Grid
            item
            md={10}
            sm={10}
            xs={12}
            justifyContent="center"
            alignItems="center"
          >
            <TypeAnimation
              sequence={[
                "Hello", // Types 'One'
                1000, // Waits 1s
                "Hello I am Ajit Kumar Chaubey" // Deletes 'One' and types 'Two'
              ]}
              wrapper="h6"
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: "2em",
                display: "inline-block",
                color: "#EADDCA"
              }}
            />
          </Grid>
          <Grid
            item
            md={10}
            sm={10}
            xs={12}
            justifyContent="center"
            alignItems="center"
            marginTop={-11}
          >
            <TypeAnimation
              sequence={[
                "I am a Frontend Developer", // Types 'One'
                1000, // Waits 1s
                "I am a Frontend Developer with 1+ years of Experience" // Deletes 'One' and types 'Two'
              ]}
              wrapper="h5"
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: "2em",
                display: "inline-block",
                color: "#FFBF00"
              }}
            />
          </Grid>
        </Grid>
        <Grid item md={1} sm={2} xs={2}>
          <Stack spacing={2}>
            <TwitterIcon sx={{ cursor: "pointer" }} />
            <LinkedInIcon
              sx={{ cursor: "pointer" }}
              onClick={() => {
                const a = document.createElement("a");
                a.setAttribute(
                  "href",
                  "https://www.linkedin.com/in/ajit-chaubey-232a67171/"
                );
                a.setAttribute("target", "_blank");
                a.click();
              }}
            />
            <GitHubIcon sx={{ cursor: "pointer" }} />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
export default forwardRef(BodyContent);
