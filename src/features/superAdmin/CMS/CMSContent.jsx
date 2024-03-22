import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Divider,
  Flex,
  Grid,
  GridItem,
  Input,
  Select,
  Spacer,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { Select as MultiSelect } from "chakra-react-select";
import JoditEditor from "jodit-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setPreviousPath } from "../../../store/slices/profileSlice";
import {
  getAllSubjects,
  getCMSAssessmentsList,
  getCMSAudienceList,
  getCMSContent,
  getCMSTestsLists,
  getDeletedCMSContentById,
  getUpdatedCMSContent,
  setCurrentCMSContent,
  setDeletedCMSContentById,
  setNewSubject,
} from "../../../store/slices/superAdminSlice/superAdminSlice";
import { validateFormData } from "../../../Utilities/FormValidation";
import SubjectPopup from "./Subjects/SubjectPopup";

const CMSContent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const selectedRole = useSelector((state) => state?.profile?.selectedRole);
  const token = useSelector((state) => state?.profile?.token);
  const userRole = useSelector((state) => state.profile.selectedRole);
  const loginResponse = useSelector((state) => state?.profile?.user);

  const CMSContent = useSelector(
    (state) => state?.superAdmin?.currentCMSContent
  );

  const updatedSubjectResponse = useSelector(
    (state) => state.superAdmin?.updateSubject
  );
  const CMSAssessmentsList = useSelector(
    (state) => state?.superAdmin?.assessmentsList?.data?.response?.data
  );
  const CMSTestsList = useSelector(
    (state) => state?.superAdmin?.testsList?.data?.response?.data
  );
  const CMSAudienceList = useSelector(
    (state) => state?.superAdmin?.audienceList?.data?.response?.data
  );
  const subjectsResponse = useSelector(
    (state) => state?.superAdmin?.getSubjects?.data?.response
  );
  const deleteSubjectResponse = useSelector(
    (state) => state.superAdmin?.deleteSubject
  );

  const [data, setData] = useState("");
  const [popup, setPopup] = useState(false);
  const [audience, setAudience] = useState([]);
  const [selectedAudience, setSelectedAudience] = useState([]);
  const [errors, setErrors] = useState({});
  const [inputFields, setInputFields] = useState({
    category: "Smart Coach Resources",
    title: "",
    status: "",
    media_type: "",
    subject: "",
    publish_date: "",
    expired_date: "",
    primary_audience: [],
    assessment_name: "",
    test_name: "",
    file_url: "",
  });

  const editContentFields = {
    category: CMSContent?.category,
    title: CMSContent?.title,
    status: CMSContent?.status,
    media_type: CMSContent?.media_type,
    subject: CMSContent?.subject,
    publish_date: CMSContent?.publish_date,
    expired_date: CMSContent?.expired_date,
    primary_audience: CMSContent?.primary_audience,
    assessment_name: CMSContent?.assessment_name,
    test_name: CMSContent?.test_name,
    file_url: CMSContent?.file_url,
    // created_by: CMSContent?.created_by,
    // uuid: CMSContent?.uuid,
  };

  console.log("edit Content Fields", editContentFields.primary_audience);

  const addContent = [
    {
      id: "1",
      label: "Category*:",
      placeholder: "",
      name: "category",
      inputType: "select",
      options: [
        { value: "smart coach resources", label: "Smart Coach Resources" },
        { value: "email templates", label: "Email Templates" },
      ],
    },
    {
      id: "2",
      label: "Title*:",
      placeholder: "",
      name: "title",
      inputType: "text",
    },
    {
      id: "3",
      label: "Status*:",
      placeholder: "",
      name: "status",
      inputType: "select",
      options: [
        { value: "active", label: "Active" },
        { value: "inactive", label: "In Active" },
      ],
    },
    {
      id: "4",
      label: "Media Type*:",
      placeholder: "",
      name: "media_type",
      inputType: "select",
      options: [
        { value: "html_text", label: "HTML TEXT" },
        { value: "url", label: "URL" },
        { value: "application", label: "Application" },
        { value: "audio", label: "Audio" },
        { value: "document", label: "Document" },
        { value: "image", label: "Image" },
        { value: "message", label: "Message" },
        { value: "text", label: "Text" },
        { value: "video", label: "Video" },
      ],
    },

    {
      id: "6",
      label: "Subject*:",
      placeholder: "",
      name: "subject",
      inputType: "select",
      options:
        subjectsResponse &&
        Object.entries(subjectsResponse)?.map(
          ([key, value]) =>
            ({
              label: value.name,
              value: value.name,
            } || {})
        ),
    },
    {
      id: "7",
      label: "Primary Audience*:",
      placeholder: "",
      name: "primary_audience",
      inputType: "multiselect",
      options: audience,
    },
    {
      id: "8",
      label: "Assessment*:",
      placeholder: "",
      name: "assessment_name",
      inputType: "select",
      options:
        CMSAssessmentsList &&
        Object.entries(CMSAssessmentsList)?.map(
          ([key, value]) =>
            ({
              label: value.Assesment_name,
              value: value.Assesment_name,
            } || {})
        ),
    },
    {
      id: "9",
      label: "Tests*:",
      placeholder: "",
      name: "test_name",
      inputType: "select",
      options:
        CMSTestsList &&
        Object.entries(CMSTestsList)?.map(([key, value]) => ({
          label: value.test_name,
          value: value.test_name,
        })),
    },
    {
      id: "10",
      label: "Publish Date:",
      placeholder: "",
      name: "publish_date",
      inputType: "date",
    },
    {
      id: "11",
      label: "Expiry Date:",
      placeholder: "",
      name: "expired_date",
      inputType: "date",
    },
    {
      id: "5",
      label: "URL:",
      placeholder: "",
      name: "url",
      inputType: "text",
    },
  ];

  const extensionsList = [
    { key: "audio", value: ["MP3"] },
    { key: "document", value: ["PDF", "PPT", "PPTX", "XLS", "XLSX"] },
    { key: "image", value: ["PNG", "JPG", "SVG"] },
    { key: "text", value: ["txt"] },
    { key: "video", value: ["MP3"] },
    { key: "application", value: [""] },
  ];

  const handleChange = (e) => {
    //console.log("event values in handleChange", e.target.name, e.target.value);
    if (e.target.name === "file_url") {
      //console.log("file url if condition", e.target.files[0]);
      handleFileCheck(e.target.name, e.target.files[0]);
    } else if (
      e.target.name === "media_type" &&
      inputFields?.file_url?.length > 0
    ) {
      //console.log("into else if condition");
      handleFileCheck(e.target.name, e.target.value);
    } else {
      //console.log("into else condition");
      setInputFields({
        ...inputFields,
        [e.target.name]: e.target.value,
      });
    }
  };

  // const handleMultiSelectRoleOption = (role) => {
  //   console.log("selected audience role", role);
  //   const primaryAudience = role[0].label;
  //   setSelectedAudience(role);
  //   setInputFields({
  //     ...inputFields,
  //     primary_audience: role[0].label,
  //   });
  // };

  const handlePrimaryAudience = (audienceList) => {
    let all_value = null;
    if (audienceList?.length) {
      for (let audience of audienceList) {
        if (audience.label == "All") {
          all_value = audience;
          break;
        }
      }
    }

    if (all_value) {
      console.log("in all case");
      setSelectedAudience([all_value]);
      setFormData((prevState) => ({
        ...prevState,
        primary_audience: all_value.value,
      }));
    } else {
      console.log("Not in all case");

      setSelectedAudience(audienceList);
      setFormData((prevState) => ({
        ...prevState,
        primary_audience: audienceList?.map((audience) => audience.value),
      }));
    }

    console.log("formdata in handle primary audience", formData);
  };

  const validateData = (event) => {
    event.preventDefault();
    var formData = new FormData();

    const { description, comments, ...payload } = inputFields;

    let errorObj = validateFormData(payload);
    setErrors({ ...errorObj });

    console.log(
      "CMS Content Fields before converting to form data",
      inputFields
    );
    for (var key in inputFields) {
      if (["assessment_name"].includes(key) && inputFields[key] === undefined) {
        formData.append(key, "common");
      } else if (inputFields[key] === undefined) {
        formData.append(key, "all");
      } else {
        formData.append(key, inputFields[key]);
      }
    }

    if (CMSContent?.uuid?.length > 0) {
      formData.append("updated_by", loginResponse?.response?.uuid);
      formData.append("updater_role", selectedRole);
      formData.append("language", "");
      dispatch(
        getUpdatedCMSContent({
          body: formData,
          token,
          contentId: CMSContent?.uuid,
        })
      );
    } else {
      formData.append("created_by", loginResponse?.response?.uuid);
      formData.append("creater_role", selectedRole);
      formData.append("language", "");
      dispatch(getCMSContent({ body: formData, token }));
    }
  };

  const handleFileCheck = (fieldName, fieldValue) => {
    console.log("handleFileCheck", fieldName, fieldValue.name);
    const file = fieldValue;
    if (fieldName === "media_type") {
      setInputFields({ ...inputFields, media_type: fieldValue });
    } else if (fieldName === "file_url") {
      let fileExtension = fieldValue.name
        .substring(fieldValue.name.lastIndexOf(".") + 1, fieldValue.name.length)
        .toUpperCase();
      console.log("fileExtension", fileExtension);
      extensionsList.map((item, index) => {
        if (item.key === inputFields.media_type) {
          //console.log("item.value", item.value);
          if (item.value.includes(fileExtension)) {
            //console.log("item.value", item.value);
            setErrors({
              ...errors,
              file_url: "",
            });

            setInputFields({
              ...inputFields,
              file_url: fieldValue,
            });
          } else {
            setErrors({
              ...errors,
              file_url: "File Extension doesn't match",
            });
          }
        }
        //console.log("input Fields data after setting file", inputFields);
      });
    }
  };

  const handleCancel = () => {
    navigate(`/role/${selectedRole}`);
    dispatch(setPreviousPath(location.pathname));
    dispatch(setCurrentCMSContent(null));
  };

  const handleDelete = (CMSContent) => {
    //console.log("Content UUID", CMSContent?.uuid);
    dispatch(getDeletedCMSContentById({ id: CMSContent?.uuid, token: token }));
  };

  useEffect(() => {
    //console.log("useEffect when CMSContent changes", CMSContent);
    setInputFields(editContentFields);
    editContentFields.category !== undefined &&
      editContentFields.category !== "" &&
      setPopup(true);
  }, [CMSContent]);

  useEffect(() => {
    dispatch(getAllSubjects({ token: token }));
    dispatch(setNewSubject(null));
    dispatch(getCMSAssessmentsList());
    dispatch(getCMSTestsLists());
    dispatch(getCMSAudienceList());
    dispatch(setDeletedCMSContentById(null));
  }, []);

  useEffect(() => {
    dispatch(getAllSubjects({ token: token }));
  }, [updatedSubjectResponse, deleteSubjectResponse]);

  useEffect(() => {
    let convertAudienceList = [];
    const result = CMSAudienceList?.map((item, key) => {
      convertAudienceList?.push({
        value: item.Role_id,
        label: item.Role_name,
      });
      return item.Role_name;
    });
    convertAudienceList.unshift({ label: "All", value: result });
    setAudience(convertAudienceList);
    setSelectedAudience(editContentFields.primary_audience);
  }, [CMSAudienceList]);

  console.log("selected Audience", selectedAudience);
  return (
    <div>
      <Flex h={6} display={{ base: "flex flex-col", md: "flex", lg: "flex" }}>
        {popup === true ? (
          <>
            <Box>
              <Text textStyle="h4">Edit Content</Text>
            </Box>
            <Spacer />
            <Box>
              <Button color="black" onClick={() => handleDelete(CMSContent)}>
                Delete
              </Button>
              <DeleteIcon cursor="pointer" color="red" fontSize={20} />
            </Box>
          </>
        ) : (
          <>
            <Box>
              <Text textStyle="text">Add Content</Text>
            </Box>
            <Spacer />
            <Box ml={{ base: "-12px", md: "0", lg: "0" }}>
              <SubjectPopup />
            </Box>
          </>
        )}
      </Flex>
      <Divider
        marginTop={{ base: "10", md: "4", lg: "4" }}
        marginBottom="5"
        borderColor="gray"
      />
      <form onSubmit={validateData}>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap="6"
        >
          {addContent?.map((item, index) => {
            return (
              <GridItem colSpan="1">
                {item.inputType === "select" &&
                  item.name === "test_name" &&
                  inputFields?.assessment_name?.includes(["fitnessGram"]) && (
                    <Box>
                      <Text mb="2">{item.label}</Text>
                      <Select
                        type="select"
                        border="0px"
                        bg="bg.100"
                        name={item?.name}
                        value={inputFields[item?.name]}
                        onChange={handleChange}
                      >
                        <option value="all">All</option>
                        {item.options?.map((item, key) => (
                          <option value={item.value}>{item.label}</option>
                        ))}
                      </Select>
                      {errors?.[item?.name] && (
                        <Text color="red">{errors?.[item?.name]}</Text>
                      )}
                    </Box>
                  )}
                {item.inputType === "select" && item.name !== "test_name" && (
                  <Box>
                    <Text mb="2" textStyle={"textHead"}>
                      {item.label}
                    </Text>
                    <Select
                      type="select"
                      border="0px"
                      bg="bg.100"
                      name={item?.name}
                      value={inputFields[item?.name]}
                      onChange={handleChange}
                      defaultValue="all"
                      textStyle={"textHead"}
                    >
                      <option value="all" textStyle={"textHead"}>
                        All
                      </option>
                      {item.options?.map((item, key) => (
                        <option value={item.value}>{item.label}</option>
                      ))}
                    </Select>
                    {errors?.[item?.name] && (
                      <Text color="red">{errors?.[item?.name]}</Text>
                    )}
                  </Box>
                )}
                {item.inputType === "text" && (
                  <Box>
                    <Text mb="2" textStyle={"textHead"}>
                      {item.label}
                    </Text>
                    <Input
                      type="text"
                      border="0px"
                      bg="bg.100"
                      name={item?.name}
                      value={inputFields[item?.name]}
                      onChange={handleChange}
                      textStyle={"textHead"}
                    />
                    {errors?.[item?.name] && (
                      <Text color="red">{errors?.[item?.name]}</Text>
                    )}
                  </Box>
                )}

                {item.inputType === "date" && (
                  <Box>
                    <Text mb="2" textStyle={"textHead"}>
                      {item.label}
                    </Text>
                    <Input
                      type="date"
                      border="0px"
                      bg="bg.100"
                      name={item?.name}
                      value={inputFields[item?.name]?.split("T")[0]}
                      onChange={handleChange}
                      textStyle={"textHead"}
                    />
                    {errors?.[item?.name] && (
                      <Text color="red">{errors?.[item?.name]}</Text>
                    )}
                  </Box>
                )}

                {item.inputType === "multiselect" && (
                  <Box>
                    <Text textStyle={"textHead"}>{item.label}</Text>
                    <Box
                      backgroundColor="#F5F9FF"
                      w={{ base: "18rem", md: "20rem", lg: "20rem" }}
                    >
                      <MultiSelect
                        useBasicStyles
                        colorScheme="bg"
                        isMulti
                        name="primary_audience"
                        value={selectedAudience}
                        closeMenuOnSelect
                        onChange={handlePrimaryAudience}
                        options={
                          selectedAudience?.[0]?.label != "All" ? audience : []
                        }
                      />
                      {errors?.[item?.name] && (
                        <Text color="red">{errors?.[item?.name]}</Text>
                      )}
                    </Box>
                  </Box>
                )}
              </GridItem>
            );
          })}
        </Grid>
        <Box flex="1" className="mt-10">
          <Text marginBottom="0.625rem">Description</Text>

          <Box height="12.5rem">
            <JoditEditor
              disabled={true}
              setReadonly={true}
              className="text-start content-start h-[100vh]"
              name="description"
              value={inputFields.content}
              onChange={(event) => {
                setData({
                  ...data,
                  content: event,
                });
              }}
            />
          </Box>
        </Box>
        <Text marginTop="6">Comments</Text>
        <Textarea
          height="12.5rem"
          name="comments"
          value={inputFields.comments}
          onChange={handleChange}
        ></Textarea>

        <Text className="mt-3 mb-2" textStyle={"textHead"}>
          File Upload:
        </Text>
        <Input
          type="file"
          name="file_url"
          onChange={handleChange}
          textStyle="textHead"
          border="none"
        ></Input>

        {extensionsList?.length > 0 ? (
          <Text textStyle={"textHead"}>
            The following file types are supported -
            {extensionsList.map((item, index) => {
              if (item.key === inputFields.media_type) {
                return item.value.join(", ");
              }
            })}
          </Text>
        ) : (
          "NA"
        )}

        <Text className="text-red" textStyle={"textHead"}>
          {errors && errors?.file_url}
        </Text>
        <Center h="10rem">
          <Flex
            minWidth="max-content"
            alignItems="center"
            className="mt-3 ml-3 gap"
          >
            <ButtonGroup gap={{ base: "1", md: "4", lg: "4" }}>
              <Button
                color="black"
                borderRadius="3xl"
                backgroundColor="#EEEEEE"
                type="button"
                width={{ base: "6rem", md: "9rem", lg: "9rem" }}
                onClick={handleCancel}
                textStyle={"textHead"}
              >
                <Text textStyle={"textHead"}> Cancel</Text>
              </Button>

              <Button
                backgroundColor="#65a30d"
                width={{ base: "6rem", md: "10rem", lg: "10rem" }}
                color="white"
                borderRadius="3xl"
                type="submit"
              >
                <Text textStyle={"textHead"}>Save Changes</Text>
              </Button>
            </ButtonGroup>
          </Flex>
        </Center>
      </form>
    </div>
  );
};

export default CMSContent;
