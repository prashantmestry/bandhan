import React from "react";
import Layout from "../Layout";
import Header from "./Header";
import SliderSection from "./SliderSection";
import Footer from "./Footer";
import FundTabs from "./FundTabs";
import FundTypes from "./FundTypes.js";
import GoalSection from "./GoalSection";
import HelpSection from "./HelpSection";
import FundCardList from "./FundCardList";

const Home = (props) => {
  return (
    <Layout>
      <Header />
      <SliderSection />

      <FundTabs />

      <FundTypes />

      <FundCardList />

      <GoalSection />

      <HelpSection />

      <Footer />
    </Layout>
  );
};

export default Home;
