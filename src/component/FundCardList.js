import styled from "@emotion/styled";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Button, Typography } from "@mui/material";

const FundHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));

const FundCardList = () => {
  return (
    <FundCards>
      {[1, 2, 3].map((item) => {
        return (
          <div className="single-item" key={item}>
            <div className="item-row">
              <FundHeading>Bandan Infrastructure Fund</FundHeading>
              <div className="item-row">
                <span
                  style={{
                    marginRight: "10px",
                    fontSize: "12px",
                  }}
                >
                  High
                </span>
                <AlarmOnIcon />
              </div>
            </div>

            <div className="item-row">
              <div className="year-span">
                <span>1Y</span>
                <span>3Y</span>
                <span>5Y</span>
                <span>From Start</span>
              </div>
              <div className="green-txt">24.5%</div>
            </div>

            <div className="item-row">
              <div>
                <ShoppingCartOutlinedIcon className="icons" />
                <FavoriteBorderOutlinedIcon className="icons" />
              </div>
              <div className="item-row">
                <Button
                  variant="outlined"
                  size="small"
                  sx={{ marginRight: "10px", textTransform: "none" }}
                >
                  Know More
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  sx={{ marginRight: "10px", textTransform: "none" }}
                >
                  Invest Now
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </FundCards>
  );
};

const FundCards = styled("div")({
  display: "flex",
  marginTop: "30px",
  overflow: "auto",
  ".item-row": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ".icons": {
    color: "#344054",
  },
  ".single-item": {
    border: "1px solid #D0D5DD",
    width: "380px",
    minWidth: "300px",
    height: "165px",
    padding: "10px",
    borderRadius: "5px",
    marginRight: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    ".year-span": {
      span: {
        padding: "5px 10px",
        marginRight: "4px",
        borderRadius: "4px",
        background: "#eaecf0",
      },
    },
    ".fund-title": {
      fontWeight: 600,
    },
    ".green-txt": {
      color: "#389E0D",
      fontWeight: 600,
    },
  },
});

export default FundCardList;
