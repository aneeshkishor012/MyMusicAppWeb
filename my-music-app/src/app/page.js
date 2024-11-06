'use client'; // <-- Add this at the top
import React, { useState } from 'react';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import HomePage from './screens/home/home';
import { Layout } from 'antd';
import { Footer } from 'antd/es/layout/layout';
config.autoAddCss = false;
function Home  () {
  return (
    <Layout>
      <HomePage/>
      <Footer>Footer</Footer>
    </Layout>
  );
};
export default Home;