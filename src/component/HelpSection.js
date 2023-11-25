import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";

const HelpSection = () => {
  return (
    <HelpSectionGrid container className="light-blue-bg">
      <Grid item xs={12} sm={12} md={3} lg={3}>
        <div className="col-list">
          <Typography
            sx={{
              fontSize: "24px",
              lineHeight: "40px",
            }}
          >
            We are here to help
          </Typography>
        </div>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={3}>
        <div className="col-list">
          <h1>Call</h1>

          <p className="light-text">1-800-234455</p>
          <p className="light-text">
            Client resources are available Monday through Friday, 8 a.m. to 7:30
            p.m.
          </p>
        </div>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={3}>
        <div className="col-list">
          <h1>Connect with an Advisor</h1>
          <p className="light-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
      </Grid>

      <Grid item xs={6} sm={4} md={3} lg={3}>
        <div className="col-list">
          <div>
            <h1>Download center</h1>
            <p className="light-text">
              Search for forms, monthly factsheets, disclosures and account
              applications.
            </p>
          </div>
          <div style={{ marginTop: "20px" }}>
            <h1>Quick Access</h1>
            <ul>
              <li>&gt; Subscribe to e-statement</li>
              <li>&gt; Account and capital gain statements</li>
              <li>&gt; Unclaimed dividend</li>
            </ul>
          </div>
        </div>
      </Grid>
    </HelpSectionGrid>
  );
};

const HelpSectionGrid = styled(Grid)(({ theme }) => ({
  marginTop: "20px",
  padding: "54px 0 0 101px",
  display: "flex",
  justifyContent: "flex-start",

  [theme.breakpoints.down("md")]: {
    padding: "20px",
  },

  ".col-list": {
    margin: "10px",
    maxWidth: "250px",
    xborder: "1px solid green",
    [theme.breakpoints.down("md")]: {
      padding: "0",
    },
    h1: {
      fontSize: "16px",
      marginBottom: "20px",
    },
    ul: {
      display: "flex",
      flexDirection: "column",
    },
  },
}));

export default HelpSection;
