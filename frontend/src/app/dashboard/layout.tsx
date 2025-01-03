"use client"
import React, { useState } from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import './globals.css';
import { persistor, store, useAppDispatch, useAppSelector } from "@/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ConfigProvider, Layout } from "antd";

const RootLayout = ({ children }: React.PropsWithChildren) => {

  return (
    <AntdRegistry>
      <ConfigProvider
        theme={{
          token: {
            
          }
        }}
      >
        <Layout>
          {children}
        </Layout>
      </ConfigProvider>
    </AntdRegistry>
  );
};

export default RootLayout;