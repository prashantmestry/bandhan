import styled from "@emotion/styled";
import { Box } from "@mui/material";

const FundTypes = () => {
  return (
    <FundTypeBox>
      <ul>
        <li>Trending</li>
        <li>High Return</li>
        <li>Low Risk</li>
        <li>Tax Savings</li>
        <li>NFO</li>
      </ul>
    </FundTypeBox>
  );
};

const FundTypeBox = styled(Box)({
  marginTop: "20px",
  overflowX: "auto",
  ul: {
    display: "flex",
    li: {
      border: "1px solid #D0D5DD",
      padding: "4px 16px",
      borderRadius: "15px",
      marginRight: "20px",
      fontSize: "14px",
      color: "#344054",
    },
  },
});

export default FundTypes;
