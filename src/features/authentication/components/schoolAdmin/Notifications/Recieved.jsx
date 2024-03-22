import {
    Box,
    Button,
    ButtonGroup,
    Divider,
    Flex,
    Image,
    Spacer,
    Text,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
import { useSelector } from "react-redux";
  import { useNavigate } from "react-router-dom";
import EllipsisIcon from "../../../../../features/superAdmin/customIcons/ellipsisIcon.png"
  import { UnCheckedNotifications } from "../../../../../features/superAdmin/json_files/NotificationsData.json";

// import { UnCheckedNotifications } from "../../"
  
  const NotificationsReceived = () => {


  const navigate = useNavigate();
	const userRole = useSelector((state) => state.profile.selectedRole);







    const handleButtonClick = () => {

      navigate(`/role/${userRole}/Notifications/Manage`);

    };
  
    // const [notificationsBG, setNotificationsBG] = useState("");
  
    const [isActive, setIsActive] = useState("true");
    var notificationsBG = "";
    const [checkedMessages, setCheckedMessages] = useState([]);
  
    const [UnCheckedMessages, setUnCheckedMessages] = useState(
      UnCheckedNotifications
    );
  
    // const handleCheckedMessage = (item, key) => {
    //   checkedMessages.push(item);
    //   UnCheckedMessages.splice(key, 1);
    //   console.log("Checked Messages", checkedMessages);
    //   console.log("UnChecked Messages:", UnCheckedMessages);
    // };









  
    return (
      <>
        <Flex>
          <Box>
            <Text textStyle="h1">NOTIFICATIONS</Text>
            <br></br>
          </Box>
        </Flex>
        <Flex className="mb-5">
          <ButtonGroup>
            <Button
              backgroundColor="primary"
              color="#ffffff"
              marginRight="-0.5rem"
              borderRadius="none"
              borderLeftRadius="1rem"
              width="10rem" 
            >
              RECEIVED
            </Button>
            <Button
              onClick={handleButtonClick}
              backgroundColor="#EEEEEE"
              color="black"
              borderRadius="none"
              borderRightRadius="1rem"
              width="10rem"
            >
              MANAGE
            </Button>
          </ButtonGroup>
        </Flex>
        <Text textStyle="h6">
          Notifications will be displayed to user everytime they login, prior to
          accessing their dashboard.
        </Text>
  
        <Box marginTop="3">
          {UnCheckedMessages.map((item, key) => (
            <Flex
              onClick={() => setIsActive(key)}
              style={{
                backgroundColor: key === isActive ? "#FFFFFF" : "#EBF8FF",
              }}
            >
              <Box w="full">
                <Flex>
                  <Box>
                    <div className="w-2 h-2 bg-primary rounded-full mr-10 mt-12 ml-3"></div>
                  </Box>
                  <Box marginTop="3" p="3">
                    <p>{item.Header}</p>
                    <p>{item.Pending}</p>
                    <p>{item.DateTime}</p>
                  </Box>
                </Flex>
                <Divider />
              </Box>
              <Box>
                <Image src={EllipsisIcon} boxSize="2rem" marginTop="6"></Image>
              </Box>
            </Flex>
          ))}
        </Box>
        <Box>
          {/* {UnCheckedMessages.map((item, key) => (
            <>
              {item.Status === "unread"
                ? notificationsBG = "#EBF8FF"
                : notificationsBG = "#FFFFFFf"}
              <Flex backgroundColor={notificationsBG}>
                <Button
                  p="7"
                  w="100rem"
                  // onClick={() => {
                  //   setCheckedMessages([
                  //     ...checkedMessages,
                  //     {
                  //       Header: item.Header,
                  //       Pending: item.Pending,
                  //       Date: item.Date,
                  //     },
                  //   ]);
  
                  //   setUnCheckedMessages(
                  //     UnCheckedMessages.filter(
                  //       (message) => message.Header !== item.Header
                  //     )
                  //   );
                  // }}
  
                  onClick={() =>
                    setUnCheckedMessages([...UnCheckedMessages, { Status: "read" }])
                  }
                >
                  <Text>{item.Header}</Text>
                  <Text>{item.Pending}</Text>
                  <Text>{item.DateTime}</Text>
                </Button>
                <Spacer />
                <Box size="md">
                  <Image src={EllipsisIcon} boxSize="2rem" marginTop="3"></Image>
                </Box>
              </Flex>
              <Divider />
            </>
          ))} */}
        </Box>
  
        {/* {checkedMessages.length > 0 ? (
          <>
            <Box backgroundColor="white">
              {checkedMessages.map((item, key) => (
                <>
                  <Flex>
                    <Button p="4" w=" 100rem">
                      <Text>{item.Header}</Text>
                      <Text>{item.Pending}</Text>
                      <Text>{item.DateTime}</Text>
                    </Button>
                    <Spacer />
                    <Box size="md">
                      <Image
                        src={EllipsisIcon}
                        boxSize="2rem"
                        marginTop="6"
                      ></Image>
                    </Box>
                  </Flex>
                  <Divider />
                </>
              ))}
            </Box>
          </>
        ) : (
          ""
        )} */}
      </>
    );
  };
  
  export default NotificationsReceived;
  