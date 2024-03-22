import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Input,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';

import React, { useEffect, useState } from 'react';
import PositiveButton from '../../../../components/PositiveButton';
import NegativeButton from '../../../../components/NegativeButton';
import SettingsModal from './SettingsModal';
import InstructionsModal from './InstrctionsModal';
import Import1 from './Import1';
import Mapping from './Mapping';
import History from './History';
import CreateNewMapping from './CreateNewMapping';
import { useDispatch, useSelector } from 'react-redux';

const Import = () => {
  const dispatch = useDispatch();

  const activeTabValue = useSelector(
    (state) => state?.schoolAdmin?.activeTabVal
  );

  const [activeTab, setActiveTab] = useState(1);

  const tabObj = {
    1: <Import1 />,
    2: <Mapping setActiveTab={activeTab} />,
    3: <History />,
  };

  // const onTabClick1 = ()=> {
  // 	dispatch(setActiveTabVal(1))
  // 	setActiveTab(activeTabValue)
  // }
  // const onTabClick2 = ()=> {
  // 	dispatch(setActiveTabVal(2))
  // 	setActiveTab(activeTabValue)
  // }

  return (
    <Flex h='full' direction='column'>
      <Stack spacing='2'>
        <Text textStyle={'text'} fontWeight='bold'>
          IMPORT
        </Text>
        <Flex>
          <Button
            textStyle={'textHead'}
            color={activeTab == 1 ? 'white' : 'black-2'}
            bgColor={activeTab == 1 ? 'primary' : 'gray-1'}
            onClick={() => setActiveTab(1)}
            borderLeftRadius='full'
            borderRightWidth='1px'
            borderColor='gray'
            px='8'
          >
            Import
          </Button>
          <Button
            textStyle={'textHead'}
            color={activeTab == 2 ? 'white' : 'black-2'}
            bgColor={activeTab == 2 ? 'primary' : 'gray-1'}
            onClick={() => setActiveTab(2)}
            borderRadius={0}
            borderRightWidth='1px'
            borderColor='gray'
            px='10'
          >
            Mapping
          </Button>

          <Button
            color={activeTab == 3 ? 'white' : 'black-2'}
            bgColor={activeTab == 3 ? 'primary' : 'gray-1'}
            onClick={() => setActiveTab(3)}
            borderLeftRadius={0}
            borderRightRadius='full'
            px='12'
          >
            {' '}
            Import History
          </Button>
        </Flex>
      </Stack>

      {tabObj[activeTab]}
      {/* <CreateNewMapping /> */}
    </Flex>
  );
};

export default Import;
