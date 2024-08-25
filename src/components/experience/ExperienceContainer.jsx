import { Grid, Typography } from "@mui/material";
import React from "react";
import saplogo from "../../assets/sap-vector-logo.svg";
import logo from "../../logo.svg";
import { globalStyle } from "../../style/GlobalStyles";
import ExperienceContent from "./ExperienceContent";

const ExperienceContainer = () => {
  const info =
    "Delivered full stack development for the CAAS Project, utilizing React for the front-end, Node.js for the back-end, and AWS for cloud services. Developed and deployed serverless applications, leveraging AWS services to enhance scalability and efficiency. Designed and implemented user interfaces and experiences using Adobe XD and Figma, contributing to a seamless and engaging user experience.";
  const info2 =
    "I contributed significantly to the CAAS Project, where I focused on front-end development using React and Material-UI (MUI) to create engaging and user-friendly interfaces. My responsibilities also included UI/UX design, where I utilized Adobe XD and Figma to design user experiences. Beyond front-end development, I brought expertise in Node.js, GraphQL, and AWS to the table, enabling me to participate in full-stack development and leverage cloud services for scalable and efficient solutions.";

  const info3 = `During my tenure at the Boeing Project, my primary focus was on back-end development, where I specialized in SAP ABAP and HANA technologies. I played a key role in developing SQL queries, working with IDocs, and generating reports to support various aspects of the project. My expertise in these areas allowed me to contribute to the effective management and processing of data within the project's ecosystem.`;
  return (
    <>
      <Grid ml="20px">
        <Typography
          sx={globalStyle.textColor}
          component="h2"
          fontSize="30px"
          textAlign="center"
        >
          Experiences
        </Typography>
      </Grid>
      <Grid
        container
        flexDirection={{ xs: "column", md: "row" }}
        sx={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #763CAC 0%, rgba(50, 15, 133, 0.00) 100%)",
        }}
        spacing={2}
        mt={4}
      >
        <Grid mb={{ xs: 2, md: 0 }} md={4}>
          <ExperienceContent
            logo={logo}
            role="Associated Software Engineer"
            date=" Nov 2023 - Oct 2024"
            company="eBuilder Technology Center Pvt Ltd"
            info={info}
          />
        </Grid>

        <Grid mb={{ xs: 2, md: 0 }} md={4}>
          <ExperienceContent
            logo={logo}
            role="Apprentice Software Engineer"
            date="SEPT 2022 - AUG 2023"
            company="eBuilder Technology Center Pvt Ltd"
            info={info2}
          />
        </Grid>

        <Grid md={4}>
          <ExperienceContent
            logo={saplogo}
            role="Software Engineer"
            date="SEPT 2021 - AUG 2022"
            company="HCL Technologies Lanka"
            info={info3}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default ExperienceContainer;
