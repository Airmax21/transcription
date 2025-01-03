"use client"
import React, { useState } from "react";
import './global.css';
import { ConfigProvider, Layout } from "antd";

const SignInLayout = ({ children }: React.PropsWithChildren) => {
  const [theme, setTheme] = useState({
    colorPrimary: '#B3C8CF',
    colorBgLayout: '#89A8B2'
  })

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: theme.colorPrimary,
            colorBgBase: theme.colorBgLayout,
          }
        }}
      >
        <Layout>
          {children}
        </Layout>
      </ConfigProvider>
    </>
  );
};

export default SignInLayout