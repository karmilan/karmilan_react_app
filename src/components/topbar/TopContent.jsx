import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import { globalStyle } from "../../style/GlobalStyles";
import { topBarStyle } from "./TopBarStyle";

const TopContent = () => {
  const resume = "https://shorturl.at/dekrf";
  return (
    <>
      <Grid sx={topBarStyle.topContent}>
        <Typography
          component="h1"
          sx={globalStyle.textColor}
          fontSize={{ xs: "20px", md: "30px" }}
        >
          Mr. MAHENDRARASA KARMILAN
        </Typography>
        <Typography component="p" sx={globalStyle.textColor}>
          A professional Software Developer
        </Typography>

        <Grid container mt={{ xs: 3, md: 4 }}>
          <Button
            href={resume}
            size="large"
            variant="contained"
            sx={{
              ...globalStyle.secondaryBgColor,
              "&:hover": { backgroundColor: "#1a0b2ed1" },
            }}
          >
            Dowload CV
          </Button>

          <Button
            href="https://github.com/karmilan"
            size="large"
            variant="outlined"
            sx={{
              ...globalStyle.textColor,
              borderColor: "#ffff",
              ml: 2,
              "&:hover": { borderColor: "#ffff" },
            }}
          >
            my work
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default TopContent;
