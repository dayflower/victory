import { Avatar, Box, Icon } from '@chakra-ui/react';
import React from 'react';
import { BiSearch } from 'react-icons/bi';
import './page.css';

export const Page: React.VFC = () => {
  return (
    <article>
      <Box p="6" borderRadius="lg" borderWidth="1px">
        <Avatar name="foo" src="https://bit.ly/dan-abramov" />

        <Icon as={BiSearch} w={6} h={6} />
      </Box>
    </article>
  );
};
