"use client"
import React, { useState } from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import './globals.css';
import { persistor, store, useAppDispatch, useAppSelector } from "@/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const RootLayout = ({ children }: React.PropsWithChildren) => {

  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <AntdRegistry>
              {children}
            </AntdRegistry>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;