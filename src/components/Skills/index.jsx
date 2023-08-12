import { Grid, Typography, Card } from "@mui/material";
import React, { forwardRef } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faSquareJs,
  faBootstrap,
  faReact
} from "@fortawesome/free-brands-svg-icons";

const progressData = [
  {
    name: "HTML",
    value: 80,
    icon: (
      <FontAwesomeIcon
        icon={faHtml5}
        style={{ color: "#da5107", fontSize: "100px" }}
      />
    )
  },
  {
    name: "CSS",
    value: 80,
    icon: (
      <FontAwesomeIcon
        icon={faCss3Alt}
        style={{ color: "#0659ea", fontSize: "100px" }}
      />
    )
  },
  {
    name: "JavaScript",
    value: 80,
    icon: (
      <FontAwesomeIcon
        icon={faSquareJs}
        style={{ color: "#bab526", fontSize: "100px" }}
      />
    )
  },
  {
    name: "React Js",
    value: 80,
    icon: (
      <FontAwesomeIcon
        icon={faReact}
        style={{ color: "#29f1f5", fontSize: "100px" }}
      />
    )
  },
  {
    name: "Material UI",
    value: 90,
    icon: "data:image/png;base64,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"
  },
  {
    name: "Bootstrap",
    value: 70,
    icon: (
      <FontAwesomeIcon
        icon={faBootstrap}
        style={{ color: "#9541b4", fontSize: "100px" }}
      />
    )
  },
  {
    name: "Typescript",
    value: 60,
    icon: "data:image/png;base64,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"
  },
  {
    name: "Tailwind CSS",
    value: 60,
    icon: "data:image/png;base64,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"
  },
  {
    name: "Redux Toolkit",
    value: 60,
    icon: "data:image/png;base64,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"
  }
];
function SkillsCard(props, ref) {
  return (
    <Grid
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
        justifyContent="center"
        alignItems={"center"}
        ref={ref}
      >
        <Typography
          variant="h6"
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
      <Grid item container justifyContent="center" alignItems={"center"}>
        <Typography
          variant="h6"
          color="yellow"
          textAlign="center"
          justifyContent="center"
          marginTop={-2}
          fontWeight={600}
        >
          My Skills
        </Typography>
      </Grid>
      {progressData.map((ele) => {
        return (
          <Grid
            item
            md={4}
            sm={12}
            xs={12}
            sx={{ gap: 1, justifyContent: "center" }}
          >
            <Card
              sx={{
                p: 4,
                m: 2,
                justifyContent: "center",
                borderRadius: "16px",
                textAlign: "center",
                backgroundColor: "black"
              }}
            >
              <Typography
                variant="h6"
                marginBottom={1}
                sx={{
                  backgroundColor: "#181e1e",
                  color: "white",
                  borderRadius: "16px"
                }}
              >
                {ele.name}
              </Typography>
              <div style={{ marginBottom: "10px" }}>
                {typeof ele.icon === "string" ? (
                  <img src={ele.icon} alt="" width={"90px"} />
                ) : (
                  ele.icon
                )}
              </div>
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
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default forwardRef(SkillsCard);
