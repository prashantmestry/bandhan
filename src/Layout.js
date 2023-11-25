import styled from "@emotion/styled";
import { Container } from "@mui/material";
import React from "react";

const Layout = (props) => {
  return <PageContainer>{props?.children}</PageContainer>;
};

const PageContainer = styled(Container)(({ theme }) => ({
  border: "1px solid gray",
  ".light-text": {
    color: "#667085",
  },

  ".light-blue-bg": {
    background: "#f2f4f7",
  },

  ".dark-blue-bg": {
    background: "#EAF1FF",
  },

  ".extra-dark-blue-bg": {
    background: "e6f2f3",
  },
  ".footer-social-link-bg": {
    background: "#0c1D2F",
  },
}));

export default Layout;
