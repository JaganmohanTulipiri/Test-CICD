import { Box } from '@chakra-ui/react';
import React from 'react';

const NegativeButton = (props) => {
  const { text } = props;
  return (
    // Button from facebook.com
    <Box
      as='button'
      height='36px'
      width='96px'
      lineHeight='1.2'
      transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
      borderRadius='18px'
      fontWeight='normal'
      bg='gray-1'
      color='black'
      textStyle={'textHead'}
    >
      {text}
    </Box>
  );
};

export default NegativeButton;
