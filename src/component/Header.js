import styled from "@emotion/styled";
import { CardTravel, Menu, Search } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderBox>
      <div className="logo-head">
        <img
          src="https://bandhanmutual.com/images/c6ff8d8a5a3636b939c95d7c08884830-logo.svg"
          alt="logo"
          style={{
            width: "100%",
          }}
        />
      </div>
      <NavBox>
        <ul className="nav-link">
          <li>
            <Link to="/explore">Explore our Funds</Link>
          </li>
          <li>
            <Link to="/education">Education and Tools</Link>
          </li>
          <li>
            <Link to="/investor">Investor Center</Link>
          </li>
        </ul>

        <RightHeadBox>
          <Search className="item-1" />
          <CardTravel className="item-1" />
          <Button
            variant="outlined"
            sx={{
              marginLeft: "10px",
            }}
          >
            Login
          </Button>
        </RightHeadBox>
      </NavBox>

      <MenuLink>
        <Menu />
      </MenuLink>
    </HeaderBox>
  );
};

const HeaderBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "20px 0",
  xborder: "1px solid red",
  ".logo-head": {
    width: "129px",
    heigth: "40px",
  },
}));

const NavBox = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  justifyContent: "space-between",
  alignItems: "center",
  flex: 1,
  ".nav-link": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "20px",
    li: {
      marginRight: "10px",
    },
  },
}));

const RightHeadBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  ".item-1": {
    margin: "0 10px",
  },
}));

const MenuLink = styled("Box")(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "flex",
  },
}));

export default Header;
