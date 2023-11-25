import styled from "@emotion/styled";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const FundTabs = () => {
  const [value, setValue] = useState(0);

  const fundArray = [
    {
      title: "Equity",
      id: 0,
    },
    {
      title: "Debt",
      id: 1,
    },
    {
      title: "Hybrid",
      id: 2,
    },
    {
      title: "ETF",
      id: 3,
    },
    {
      title: "Index",
      id: 4,
    },
  ];

  return (
    <Box>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Tabs value={value} onChange={(e, val) => setValue(val)}>
          {fundArray.map((val) => {
            return (
              <NewTab key={val.id} label={val.title} {...a11yProps(val.id)} />
            );
          })}
        </Tabs>
      </Box>
      {fundArray.map((item) => {
        return (
          <CustomTabPanel key={item.id} value={value} index={item.id}>
            {item.title}
          </CustomTabPanel>
        );
      })}
    </Box>
  );
};

const NewTab = styled(Tab)({
  textTransform: "none",
});

export default FundTabs;
