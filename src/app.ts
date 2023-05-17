import { RuntimeAntdConfig } from "umi";

export const antd: RuntimeAntdConfig = (memo) => {
  memo.appConfig ??= {};
  memo.appConfig.message ??= {};
  memo.appConfig.message.duration = 5;

  return memo;
};

export const antdStyle = (memo) => {
  return memo
  return {
    // appearance: "dark",
  };
};
