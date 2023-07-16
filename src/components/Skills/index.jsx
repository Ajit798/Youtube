import { Grid, Typography } from "@mui/material";
import React, { forwardRef } from "react";
import LinearProgress from "@mui/material/LinearProgress";

const progressData = [
  {
    name: "HTML",
    value: 80
  },
  {
    name: "CSS",
    value: 80
  },
  {
    name: "JavaScript",
    value: 80
  },
  {
    name: "React Js",
    value: 80
  },
  {
    name: "Material Ui",
    value: 90
  },
  {
    name: "Bootstrap",
    value: 70
  },
  {
    name: "Typescript",
    value: 60
  },
  { name: "Tailwind CSS", value: 60 }
];
function SkillsCard(props, ref) {
  return (
    <Grid
      item
      container
      md={10}
      sm={12}
      xs={12}
      justifyContent="center"
      alignItems="center"
      marginTop={3}
      spacing={4}
    >
      <Grid
        item
        container
        md={12}
        sm={12}
        justifyContent="center"
        alignItems={"center"}
        ref={ref}
      >
        <Typography variant="h5" textAlign="center" justifyContent="center">
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
      >
        <Typography
          variant="body1"
          color="error"
          textAlign="center"
          justifyContent="center"
          marginTop={-4}
        >
          Skills
        </Typography>
      </Grid>
      {progressData.map((ele) => {
        return (
          <Grid item md={4} sm={12} xs={12}>
            <Typography variant="body2" marginBottom={1}>
              {ele.name}
            </Typography>
            <LinearProgress
              sx={{
                "&.MuiLinearProgress-determinate": {
                  height: "10px",
                  borderRadius: "8px",
                  color: "green"
                },
                "&.MuiLinearProgress-barColorPrimary": {
                  color: "green"
                }
              }}
              value={ele.value}
              variant="determinate"
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default forwardRef(SkillsCard);
