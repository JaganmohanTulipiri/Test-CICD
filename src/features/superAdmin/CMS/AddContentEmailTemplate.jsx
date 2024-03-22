import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Divider,
  Flex,
  Input,
  Select,
  Spacer,
  Text,
  Textarea,
} from "@chakra-ui/react";

import JoditEditor from "jodit-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  getAllSubjects,
  getCMSContent,
} from "../../../store/slices/superAdminSlice/superAdminSlice";
import AddContent from "./AddContent";

const AddContentEmailTemplate = () => {
  const token = useSelector((state) => state?.profile?.token);
  const userRole = useSelector((state) => state.profile.selectedRole);
  const loginResponse = useSelector((state) => state?.profile?.user);

  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState("");
  var formData = new FormData();

  const subjectsResponse = useSelector(
    (state) => state?.superAdmin?.getSubjects?.data?.response
  );

  const CMSContentResponse = useSelector(
    (state) => state?.superAdmin?.CMSContent
  );

  useEffect(() => {
    dispatch(getAllSubjects({ token: token }));
  }, []);

  console.log("All Subjects Response", subjectsResponse);

  const status = [
    "Kindergarten",
    "First Grade",
    "Second Grade",
    "Third Grade",
    "Fourth Grade",
    "Fifth Grade",
    "Sixth Grade",
    "Seventh Grade",
    "Eighth Grade",
    "Ninth Grade",
    "Eleventh Grade",
    "Twelth Grade",
    "Adult",
  ];

  const [isSuccessPopUpOpen, setIsSuccessPopUpOpen] = useState(false);

  const intended_audience = ["Help Desk", "Admin"];

  const language_label = ["English", "Spanish"];

  const [CMSContent, setCMSContent] = useState({
    category: "Email Templates",
    title: "",
    status: "",
    media_type: "",
    language: "",
    subject: "",
    publish_date: "",
    expired_date: "",
    created_by: "",
    primary_audience: "",
    assessment: "",
    url: "",
    comments: "",
    meta_data: "",
    primary_audience_name: "",
    assessment_name: "",
    test_name: "",
    file_url: "",
    thumbnail_url: "",
  });

  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    if (e.target.name === "file_url" || e.target.name === "thumbnail_url") {
      setCMSContent({ ...CMSContent, [e.target.name]: e.target.files[0] });
    } else {
      setCMSContent({
        ...CMSContent,
        [e.target.name]: e.target.value,
        created_by: loginResponse?.response?.uuid,
        primary_audience_name: userRole[0],
      });
    }
  };

  const validateData = (event) => {
    event.preventDefault();

    console.log("formmmmmmmm", event.target.elements);

    const finalObj = {};

    let errorsObj = {};

    for (let i of event.target.elements) {
      if (i.name !== "") {
        console.log(i.name, i.value);

        finalObj[i.name] = i.value;
      }
    }

    for (key in finalObj) {
      if (finalObj[key] === "" || finalObj[key] === " ") {
        errorsObj[key] = "*Required";
      }
    }

    console.log("errorObj========", errorsObj);

    if (Object.keys(errorsObj)?.length > 0) {
      console.log("form not submitted");

      setErrors(errorsObj);
    } else {
      console.log("formData=========", formData);
      for (var key in CMSContent) {
        formData.append(key, CMSContent[key]);
      }
      console.log("In try block=======Email Templates", formData);
      dispatch(getCMSContent({ body: formData, token }));
      console.log("In AddContent file", CMSContentResponse);

      if (CMSContentResponse?.data?.status === "success") {
        setIsSuccessPopUpOpen(true);
        // alert("Content Added Successfully");
        // navigate("/role/SuperAdmin");
      }
      console.log("form submitteddd");

      setErrors({});
    }

    console.log(errorsObj, "errorrrrrrrrrrrrrrrrr");

    if (
      CMSContent.category === "" ||
      CMSContent.title === "" ||
      CMSContent.status === "" ||
      CMSContent.media_type === "" ||
      CMSContent.subject === "" ||
      CMSContent.expired_date === "" ||
      CMSContent.publish_date === "" ||
      CMSContent.file_url === "" ||
      CMSContent.thumbnail_url === ""
    ) {
      // alert("Missing Data");
    } else {
      console.log("==========ValidateData============", CMSContent);

      for (var key in CMSContent) {
        formData.append(key, CMSContent[key]);
      }

      try {
        console.log("In try block=======Email Templates", formData);
        dispatch(getCMSContent({ body: formData, token }));
        console.log("In AddContent file", CMSContentResponse);

        if (CMSContentResponse?.data?.status === "success") {
          setIsSuccessPopUpOpen(true);
          // alert("Content Added Successfully");
          // navigate("/role/SuperAdmin");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="w-full max-w-full h-full max-h-full overflow-y-auto">
      {CMSContent.category === "Email Templates" ? (
        <>
          <Flex h={6}>
            <Box>
              <Text textStyle="h4">ADD CONTENT</Text>
            </Box>
            <Spacer />
          </Flex>
          <Divider marginTop="4" marginBottom="5" borderColor="gray" />

          <form onSubmit={validateData}>
            <Flex className="">
              <Box flex="1" marginLeft="1rem">
                <Text className="color-black mr-20">Category*:</Text>
                <Select
                  placeholder="Select"
                  backgroundColor="#F5F9FF"
                  w="20rem"
                  border="none"
                  name="category"
                  // value={CMSContent.category}
                  onChange={handleChange}
                >
                  <option value="Smart Coach Resources">
                    Smart Coach Resources
                  </option>
                  <option value="Email Templates" selected>
                    Email Templates
                  </option>
                </Select>

                <Text className="color-black mr-20 mt-7">Status*</Text>
                <Select
                  placeholder="Select"
                  backgroundColor="#F5F9FF"
                  w="20rem"
                  border="none"
                  name="status"
                  value={CMSContent.status}
                  onChange={handleChange}
                >
                  {status.map((item, key) => (
                    <option value={item}>{item}</option>
                  ))}
                </Select>
                <Text className="text-red">{errors && errors?.status}</Text>

                <Text className="color-black mr-20 mt-6">URL:</Text>
                <Input
                  type="text"
                  autoFocus
                  backgroundColor="#F5F9FF"
                  rounded="lg"
                  marginBottom="1rem"
                  w="20rem"
                  border="none"
                  name="url"
                  value={CMSContent.url}
                  onChange={handleChange}
                />
                <Text className="text-red">{errors && errors?.url}</Text>
              </Box>

              <Box flex="1" w="-15vw" marginLeft="6rem">
                <Text className="color-black mr-20">Template Title*:</Text>
                <Input
                  type="text"
                  autoFocus
                  backgroundColor="#F5F9FF"
                  rounded="lg"
                  w="20rem"
                  marginBottom="1rem"
                  border="none"
                  name="title"
                  value={CMSContent.title}
                  onChange={handleChange}
                />
                <Text className="text-red">{errors && errors?.title}</Text>

                <Text className="color-black mr-20">Language:</Text>
                <Select
                  placeholder="Select"
                  backgroundColor="#F5F9FF"
                  w="20rem"
                  border="none"
                  name="language"
                  value={CMSContent.language}
                  onChange={handleChange}
                >
                  {language_label.map((item, key) => (
                    <option value={item}>{item}</option>
                  ))}
                </Select>
                <Text className="text-red">{errors && errors?.language}</Text>

                <Text className="color-black mr-20" marginTop="1rem">
                  Publish Date* (mm/dd/yyyy):
                </Text>

                <Input
                  type="date"
                  autoFocus
                  backgroundColor="#F5F9FF"
                  className="rounded-lg h-8 mb-5"
                  placeholder="2023"
                  border="none"
                  width="20rem"
                  marginRight={"0.5rem"}
                  name="publish_date"
                  value={CMSContent.publish_date}
                  onChange={handleChange}
                />
                <Text className="text-red">
                  {errors && errors?.publish_date}
                </Text>
              </Box>

              <Box flex="1" marginLeft="6rem">
                <Text className="color-black mr-20">Subject*:</Text>
                <Select
                  placeholder="All"
                  backgroundColor="#F5F9FF"
                  border="none"
                  w="20rem"
                  name="subject"
                  value={CMSContent.subject}
                  onChange={handleChange}
                >
                  {subjectsResponse?.length > 0 &&
                    subjectsResponse.map((item, key) => (
                      <option value={item.name}>{item.name}</option>
                    ))}
                </Select>
                <Text className="text-red">{errors && errors?.subject}</Text>

                <Text className="color-black mr-20 mt-7">
                  Intended Audience*
                </Text>
                <Select
                  placeholder="Select"
                  backgroundColor="#F5F9FF"
                  w="20rem"
                  border="none"
                  name="test_name"
                  value={CMSContent.intended_audience}
                  onChange={handleChange}
                >
                  {intended_audience.map((item, key) => (
                    <option value={item}>{item}</option>
                  ))}
                </Select>
                <Text className="text-red">
                  {errors && errors?.intended_audience}
                </Text>

                <Text className="color-black mr-20" marginTop="1rem">
                  Expiry Date* (mm/dd/yyyy):
                </Text>

                <Input
                  type="date"
                  autoFocus
                  backgroundColor="#F5F9FF"
                  className="rounded-lg h-8 mb-5"
                  placeholder="2023"
                  border="none"
                  width="20rem"
                  marginRight={"0.5rem"}
                  name="expired_date"
                  value={CMSContent.expired_date}
                  onChange={handleChange}
                />
                <Text className="text-red">
                  {errors && errors?.expired_date}
                </Text>
              </Box>
            </Flex>
            <Box flex="1" className="ml-5">
              <Text marginBottom="0.625rem">Description</Text>

              <Box height="12.5rem">
                <JoditEditor
                  disabled={true}
                  setReadonly={true}
                  className="text-start content-start h-[100vh]"
                  value={data.content}
                  onChange={(event) => {
                    setData({
                      ...data,
                      content: event,
                    });
                  }}
                />
              </Box>

              <Text marginTop="6">Comments</Text>
              <Textarea
                height="12.5rem"
                name="comments"
                value={CMSContent.comments}
                onChange={handleChange}
              ></Textarea>
              <Text marginTop="6">Meta Data</Text>
              <Textarea
                height="12.5rem"
                marginBottom="0.625rem"
                name="meta_data"
                value={CMSContent.meta_data}
                onChange={handleChange}
              ></Textarea>
              <Text className="mt-3">File Upload:</Text>

              <input
                type="file"
                name="file_url"
                onChange={handleChange}
              ></input>
              <Text className="text-red">{errors && errors?.file_url}</Text>

              <Text fontSize={13}>
                (The following file types are supported XLS, XLSX, DOC, PPT,
                PPTX, HTM, HTML, MPEG, AVI, MOV, PDF, MP3, MP4, WAV,MPG, PNG,
                JPG, GIF, PPS)
              </Text>
              <Text className="mt-10">Thumbnail Upload:</Text>
              <input
                type="file"
                name="thumbnail_url"
                onChange={handleChange}
              ></input>
              <Text className="text-red">
                {errors && errors?.thumbnail_url}
              </Text>

              <Text fontSize={13}>
                (The following file types are supported:JPG. Note: file name
                will be converted into internal file naming pattern.)
              </Text>
            </Box>
            <Center h="10rem">
              <Flex
                minWidth="max-content"
                alignItems="center"
                className="mt-3 ml-3 gap"
              >
                <ButtonGroup gap="4">
                  <Button width="7rem">
                    <Link to="/role/SuperAdmin">
                      <Button
                        color="black"
                        borderRadius="3xl"
                        backgroundColor="#EEEEEE"
                        width="7rem"
                      >
                        Cancel
                      </Button>
                    </Link>
                  </Button>
                  <Button
                    backgroundColor="#65a30d"
                    width="10rem"
                    color="white"
                    borderRadius="3xl"
                    type="submit"
                    // onClick={validateData}
                  >
                    Save Changes
                  </Button>
                </ButtonGroup>
              </Flex>
            </Center>
          </form>
        </>
      ) : (
        <AddContent />
      )}
    </div>
  );
};

export default AddContentEmailTemplate;
