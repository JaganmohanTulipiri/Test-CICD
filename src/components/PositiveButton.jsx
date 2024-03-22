import { Box, Spinner } from '@chakra-ui/react';
import React from 'react';
import { Rings } from 'react-loader-spinner';

const PositiveButton = (props) => {
  const { text, isLoading, onClick } = props;

  return (
    <Box
      as='button'
      height='36px'
      width='96px'
      lineHeight='1.2'
      transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
      borderRadius='18px'
      fontWeight='normal'
      bg='primary'
      color='white'
      textStyle={'textHead'}
      onClick={onClick}
    >
      {isLoading ? <Spinner /> : text}
    </Box>
  );
  // <Rings height={100} width={100} colors="#00BFFF" />
};

export default PositiveButton;
