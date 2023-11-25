import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";
import FooterSocialLink from "./FooterSocialLink ";

const Footer = () => {
  return (
    <>
      <FooterBox className="dark-blue-bg">
        <FooterGrid container>
          <Grid item xs={6} sm={3} md={3} lg={3} className="col-list">
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Branch Locator</li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={3} md={3} lg={3} className="col-list">
            <ul>
              <li>Latest NAVs</li>
              <li>ETF NAV</li>
              <li>Factsheets</li>
              <li>Download Centre</li>
              <li>Learning Centre</li>
              <li>Fund House Diaries</li>
              <li>Update Contact Details</li>
              <li>FAQs</li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={3} md={3} lg={3} className="col-list">
            <ul>
              <li>Financials</li>
              <li>Voting Policy</li>
              <li>SEBI</li>
              <li>AMFI</li>
              <li>ODR Website</li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={3} md={3} lg={3} className="col-list">
            <ul>
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Site Map</li>
              <li>Code of Conduct</li>
            </ul>
          </Grid>
        </FooterGrid>
      </FooterBox>
      <FooterSocialLink />
    </>
  );
};

const FooterBox = styled(Box)(({ theme }) => ({
  padding: "32px 0 32px 93px",
  xborder: "1px solid red",
  fontSize: "12px",
  [theme.breakpoints.down("md")]: {
    padding: "15px 0 32px 20px",
  },
}));

const FooterGrid = styled(Grid)({
  ".col-list": {
    maxWidth: "264px",
    width: "264px",
    ul: {
      margin: "10px",
      li: {
        marginBottom: "8px",
      },
    },
  },
});

export default Footer;
