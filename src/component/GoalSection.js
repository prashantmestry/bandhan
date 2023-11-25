import styled from "@emotion/styled";
import { Box } from "@mui/material";

const GoalSection = () => {
  const goalList = [
    {
      id: 1,
      title: "Retirement",
      data: "Be ready for retirement with a plan for your future assets and expenses",
    },
    {
      id: 2,
      title: "Education",
      data: "Meet rising education costs for yourself or a loved one.",
    },
    {
      id: 3,
      title: "Home",
      data: "Save for a primary residence, or investment property.",
    },
    {
      id: 4,
      title: "Travel",
      data: "Set aside money for that big trip you’re planning.",
    },
  ];

  return (
    <GoalSectionBox>
      <h1>Choose your goals</h1>
      <p>Select your goal and we will do the rest!</p>

      <div className="item-box-list">
        {goalList.map((item) => {
          return (
            <div key={item.id} className="item-box">
              <h1>{item.title}</h1>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>&nbsp;</div>
                <div className="goal-data">{item.data}</div>
              </Box>
            </div>
          );
        })}
      </div>
    </GoalSectionBox>
  );
};

const GoalSectionBox = styled(Box)(({ theme }) => ({
  overflowX: "auto",
  marginTop: "20px",
  h1: {
    fontSize: "28px",
    marginBottom: "10px",
  },

  ".item-box-list": {
    display: "flex",
    marginTop: "20px",
  },
  ".item-box": {
    border: "1px solid #D0D5DD",
    width: "280px",
    maxWidth: "280px",
    maxHeight: "146px",
    padding: "10px",
    marginRight: "20px",
    borderRadius: "5px",
    h1: {
      fontSize: "12px",
      textTransform: "uppercase",
    },
    ".goal-data": {
      marginLeft: "40px",
      marginTop: "20px",
    },
  },
}));

export default GoalSection;
