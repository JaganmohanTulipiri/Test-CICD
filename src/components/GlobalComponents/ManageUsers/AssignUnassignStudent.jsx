import {
  Button,
  ButtonGroup,
  Center,
  Grid,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import GridProviderNew from "../../GridProviderNew";

const AssignUnassignStudent = (props) => {
  let { isOpen, onOpen, onClose } = useDisclosure();
    
  const finalRef = React.useRef(null);

  const assignStudents = {
    title: props.header,

    assignStudentsFields: [
      {
        lable: "Schools",
        inputType: "select",
        options: [
          "All Schools",
          "Greenlight Elementary",
          "Greenlight HighSchool",
        ],
      },
      {
        lable: "Class",
        inputType: "select",
        options: [
          "All Schools",
          "Greenlight Elementary",
          "Greenlight HighSchool",
        ],
      },
      {
        lable: "Assignment Type",
        inputType: "radio",
        options: [
          "Remove current class assignments",
          "keep current class assignments",
        ],
      },
    ],
  };
  const { title, assignStudentsFields } = assignStudents;

  return (
    <>
      <Link background="none" border="none" onClick={onOpen}>
        <Button color="black">Assign</Button>
      </Link>

      <Modal
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        borderRadius={4}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p="9">
            <Stack spacing="2">
              <Center color="">
                <Text textStyle="h4" marginRight="1">
                  {title}
                </Text>
              </Center>

              <Grid templateColumns="repeat(1, 1fr)" gap="8" marginTop="8">
                <GridProviderNew data={assignStudentsFields} />
              </Grid>

              <Center>
                <ButtonGroup gap="4" marginTop="3">
                  <Button
                    color="black"
                    borderRadius="3xl"
                    backgroundColor="#EEEEEE"
                    width="7rem"
                    onClick={onClose}
                  >
                    Cancel
                  </Button>

                  <Button
                    backgroundColor="#1890ff"
                    color="white"
                    borderRadius="3xl"
                    w="8rem"
                  >
                    Submit
                  </Button>
                </ButtonGroup>
              </Center>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AssignUnassignStudent;
