// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React from "react";
import { ThemeProviderProps, ThemeProvider } from "/Users/congxiaochen/Desktop/demo/node_modules/.pnpm/antd-style@3.1.1_@types+react@18.2.6_antd@5.5.0_react-dom@18.2.0_react@18.2.0/node_modules/antd-style";
import { ApplyPluginsType } from "umi";
import { getPluginManager } from "../core/plugin";

interface ThemeContextProps {
  themeConfig: ThemeProviderProps;
  setThemeConfig: React.Dispatch<ThemeProviderProps>;
}

export const ThemeContext = React.createContext<ThemeContextProps>(
  {} as ThemeContextProps
);

export const Theme = ({ rootContainer }) => {
  const finalConfigProvider = getPluginManager().applyPlugins({
    key: "antdStyle",
    type: ApplyPluginsType.modify,
    initialValue: {
        ...{"appearance":"dark"},
    },
  });
  const [themeConfig, setThemeConfig] = React.useState(finalConfigProvider);

  return (
    <ThemeContext.Provider value={ { themeConfig, setThemeConfig } }>
      <ThemeProvider {...themeConfig}>{rootContainer}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
