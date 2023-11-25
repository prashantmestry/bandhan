import styled from "@emotion/styled";
import { Box } from "@mui/material";

const FooterSocialLink = () => {
  return (
    <FooterSocialLinkBox className="footer-social-link-bg">
      <div>
        © Bandhan Mutual Fund 2023 | Mutual fund investments are subject to
        market risks, read all scheme related documents carefully.
      </div>
      <div>
        <span>One</span>
        <span>One</span>
        <span>One</span>
        <span>One</span>
      </div>
    </FooterSocialLinkBox>
  );
};

const FooterSocialLinkBox = styled(Box)(({ theme }) => ({
  height: "auto",
  [theme.breakpoints.up("md")]: {
    height: "90px",
  },
  color: "#ffffff",
  display: "flex",
  flexDirection: "row",
  columnGap: "46px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    columnGap: "0",
  },
  alignItems: "center",
  justifyContent: "space-around",
  padding: "10px",
  [theme.breakpoints.down("md")]: {
    padding: "15px",
  },
}));

export default FooterSocialLink;
