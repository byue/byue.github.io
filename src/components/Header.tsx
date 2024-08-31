import { useState } from 'react';
import { Anchor, Group, Box, Title, Space} from '@mantine/core';
import * as classes from './Header.module.css';
import React from "react";

const mainLinks = [
  { link: '#', label: 'Home' },
  { link: '#', label: 'Skills' },
  { link: '#', label: 'Services' },
  { link: '#', label: 'Customers' },
  { link: '#', label: 'Contact' },
];

export function Header() {
  const [active, setActive] = useState(0);

  const mainItems = mainLinks.map((item, index) => (
    <Anchor<'a'>
      href={item.link}
      key={item.label}
      className={classes.mainLink}
      data-active={index === active || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(index);
      }}
    >
      {item.label}
    </Anchor>
  ));
  return (
    <Box className={classes.headerstyle}>
      <Group gap={'lg'} justify="flex-start">
        <Title c="white" order={1}>Architech Solutions</Title>
        <Space w="lg"/>
        <Group gap={10} justify="flex-end">
          {mainItems}
        </Group>
      </Group>
    </Box>
  );
}