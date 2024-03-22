import { Box } from "@chakra-ui/react";

import { useSelector } from "react-redux";

import { Rings } from "react-loader-spinner";

import SignInPage from "./SignInPage";

export default function SignInMobile() {
  const loadingOne = useSelector((state) => state?.profile?.loadingOne);

  const loadingTwo = useSelector((state) => state?.profile?.loadingTwo);

  return (
    <>
      {loadingOne || loadingTwo ? (
        <Box
          w="full"
          h="full"
          bg="white"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Rings height={100} width={100} colors="#00BFFF" />
        </Box>
      ) : (
        <>
          <SignInPage />
        </>
      )}
    </>
  );
}
