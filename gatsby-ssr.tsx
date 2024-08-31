import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from './src/theme';
import React from 'react';

export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const headComponents = getHeadComponents();
  replaceHeadComponents([
    ...headComponents,
    <ColorSchemeScript key="color-scheme-script" />,
  ]);
};

export const wrapPageElement = ({ element }) => {
  return <MantineProvider theme={theme}>{element}</MantineProvider>;
};