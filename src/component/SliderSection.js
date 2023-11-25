import styled from "@emotion/styled";
import { Button } from "@mui/material";

const SliderSection = () => {
  return (
    <SliderBox className="light-blue-bg">
      <div className="small-txt">FUNDS AT BANDAN</div>
      <p>
        Funds that match up with <br /> investing goals
      </p>

      <Button
        variant="contained"
        size="large"
        sx={{
          marginTop: "20px",
          marginRight: "10px",
          textTransform: "none",
          //color: "primary.main",
          backgroundColor: "primary.main",
        }}
      >
        Start Investing
      </Button>
    </SliderBox>
  );
};

const SliderBox = styled("div")({
  padding: "20px",

  ".small-txt": {
    marginBottom: "30px",
  },
  p: {
    fontSize: "36px",
  },
});

export default SliderSection;
