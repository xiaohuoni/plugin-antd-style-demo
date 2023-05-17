// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import type { ConfigProviderProps } from 'antd/es/config-provider';
import type { AppConfig } from 'antd/es/app/context';

type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

type AntdConfig = Prettify<{}
  & ConfigProviderProps
  & { appConfig: AppConfig }
>;

export type RuntimeAntdConfig = (memo: AntdConfig) => AntdConfig;
