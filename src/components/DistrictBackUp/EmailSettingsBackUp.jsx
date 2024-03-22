import { Box, Flex, Input, Radio, RadioGroup, Text } from '@chakra-ui/react';
import React from 'react';
import PositiveButton from '../../../components/PositiveButton';
import { EmailSettingsData } from './settingsData';

const EmailSettingsBackUp = () => {
  return (
    <Flex direction='column' gap='4'>
      <Text textStyle='textHead'>E-MAIL SETTINGS</Text>
      {EmailSettingsData.map((item, index) => {
        return (
          <Box inlineSize='sm'>
            {item.inputType == 'radio' ? (
              <Flex direction='column'>
                <Text mb='2'>{item.lable}</Text>
                <RadioGroup>
                  {item.radioOptions.map((lable, index) => {
                    return (
                      <Radio value={lable} ml='4'>
                        {lable}
                      </Radio>
                    );
                  })}
                </RadioGroup>
              </Flex>
            ) : (
              <Box>
                <Text mb='2'>{item.lable}</Text>
                <Input type={item.inputType} />
              </Box>
            )}
          </Box>
        );
      })}

      <Box>
        <PositiveButton text='Save Settings' />
      </Box>
    </Flex>
  );
};

export default EmailSettingsBackUp;
