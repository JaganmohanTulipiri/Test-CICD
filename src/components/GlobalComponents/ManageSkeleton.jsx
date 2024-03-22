import {
  Box,
  Button,
  Card,
  CardBody,
  Checkbox,
  Flex,
  Text,
  Grid,
  GridItem,
  HStack,
  Spacer,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const ManageSkeleton = () => {
  return (
  
    
    <Card maxW="sm">
      <CardBody>
        <Stack mt="6" spacing="3">
          {" "}
          <Skeleton height="5px" startColor="gray-3" />
          <Skeleton height="5px" startColor="gray-3" />
          <Skeleton height="5px" startColor="gray-3" />
          <Skeleton height="5px" startColor="gray-3" />
          <Skeleton height="5px" startColor="gray-3" />
          <Skeleton height="5px" startColor="gray-3" />
          <Skeleton height="5px" startColor="gray-3" />
        </Stack>
      </CardBody>
    </Card>
    
  );
};

export default ManageSkeleton;
