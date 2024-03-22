import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Select as MultiSelect } from "chakra-react-select";
import {
  getClassesList,
  getSchoolsList,
  agPostEventData,
  getAgEventDataById,
  setAgEventDataById,
} from "../teacherSlice";
import { AgCreateEventData } from "./AgData";
import { useDispatch, useSelector } from "react-redux";
import SuccessModal from "../../../components/SuccessModal";
import { useLocation, useNavigate } from "react-router-dom";
import NegativeButton from "../../../components/NegativeButton";
import PositiveButton from "../../../components/PositiveButton";
import { validateFormData } from "../../../Utilities/FormValidation";
import { Skeleton } from "antd";
import { setPreviousPath } from "../../../store/slices/profileSlice";

const AgCreateEvent = () => {
  const { title, createEventDetails } = AgCreateEventData;

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const userId = useSelector((state) => state.profile.userId);
  const selectedRole = useSelector((state) => state.profile.selectedRole);
  const token = useSelector((state) => state.profile.token);
  const schoolsList = useSelector((state) => state.teacher.schools);
  const classesList = useSelector((state) => state.teacher.classes);
  const loading = useSelector((state) => state.teacher.loading);
  const responseCode = useSelector((state) => state.teacher.responseCode);
  const response = useSelector((state) => state?.profile?.response);
  const eventEditDetails = useSelector(
    (state) => state.teacher.agEventDataById
  );

  console.log(eventEditDetails, "ag event data ");

  const [schools, setSchools] = useState(schoolsList);
  const [classes, setClasses] = useState(classesList);

  const [selectedSchools, setSelectedSchools] = useState([]);

  const [selectedClasses, setSelectedClasses] = useState([]);
  const [errors, setErrors] = useState({});

  const [inputs, setInputs] = useState({
    event_name: "",
    start_date: "",
    end_date: "",
    schools: [],
    classes: [],
  });

  const handleSchools = (schoolsList) => {
    let all_value = null;
    if (schoolsList?.length) {
      for (let school of schoolsList) {
        if (school.label == "All") {
          all_value = school;
          break;
        }
      }
    }

    if (all_value) {
      console.log("in all case");
      setSelectedSchools(all_value);
      console.log(all_value.value, "paylpoadd");

      setInputs((prevState) => ({
        ...prevState,
        schools: all_value.value,
      }));
    } else {
      console.log("Not in all case");

      setSelectedSchools(schoolsList);

      setInputs((prevState) => ({
        ...prevState,
        schools: schoolsList?.map((item) => item?.value),
      }));
    }
  };

  const handleClasses = (classesList) => {
    let all_value = null;
    if (classesList?.length) {
      for (let clas of classesList) {
        if (clas.label == "All") {
          all_value = clas;
          break;
        }
      }
    }

    if (all_value) {
      console.log("in all case");
      setSelectedClasses([all_value]);

      setInputs((prevState) => ({
        ...prevState,
        classes: all_value.value,
      }));
    } else {
      console.log("Not in all case");

      setSelectedClasses(classesList);

      setInputs((prevState) => ({
        ...prevState,
        classes: classesList?.map((item) => item?.value),
      }));
    }
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    let errorObj = validateFormData(inputs);
    console.log(errorObj, "validation errors==========>");
    setErrors(errorObj);

    if (Object.keys(errorObj)?.length === 0) {
      let payload = {
        ...inputs,
        creater_role: selectedRole,
        created_by: userId,
      };
      console.log(payload, "payloadddd");
      dispatch(agPostEventData({ payload, token }));
  
    }
  };

  useEffect(() => {
    !schoolsList?.length && dispatch(getSchoolsList({ userId, token }));
  }, []);

  useEffect(() => {
    console.log({ selectedSchools, token });
    dispatch(getClassesList({ body: { schools: inputs?.schools }, token }));
    setSelectedClasses([]);
  }, [inputs?.schools]);

  useEffect(() => {
    schoolsList?.length && setSchools(schoolsList);
    let schoolOptions = [];

    const schoolUuidArray =
      schoolsList?.length &&
      schoolsList.map((each) => {
        schoolOptions.push({ label: each.school_name, value: each.uuid });
        return each.uuid;
      });
    // setSchools(schoolOptions);

    schoolOptions.unshift({ label: "All", value: schoolUuidArray });
    setSelectedSchools([{ label: "All", value: schoolUuidArray }]);
    setInputs((prevState) => ({
      ...prevState,
      schools: schoolUuidArray,
    }));
    setSchools(schoolOptions);
  }, [schoolsList]);

  useEffect(() => {
    let classOptions = [];

    const classUuidArr =
      classesList?.length &&
      classesList.map((each) => {
        classOptions.push({ label: each.class_name, value: each.uuid });
        return each.uuid;
      });
    classesList?.length &&
      classOptions.unshift({ label: "All", value: classUuidArr });
    classesList?.length &&
      setSelectedClasses([{ label: "All", value: classUuidArr }]);
    setInputs((prevState) => ({
      ...prevState,
      classes: classUuidArr,
    }));
    setClasses(classOptions);
  }, [classesList]);

  console.log(classes);
  return (
    <>
      {loading ? (
        <Skeleton />
      ) : (
        <Flex gap="4" direction="column">
          <Text fontWeight="bold">{title}</Text>
          <Grid templateColumns="repeat(3,1fr)" gap="2">
            <GridItem>
              <Box maxW="100%">
                <Text mb="2">Schools</Text>
                <MultiSelect
                  useBasicStyles
                  name="schools"
                  colorScheme="bg"
                  isMulti
                  value={selectedSchools}
                  closeMenuOnSelect
                  onChange={handleSchools}
                  options={selectedSchools?.[0]?.label != "All" ? schools : []}
                />
                {errors?.schools && <Text color="red">{errors.schools}</Text>}
              </Box>
            </GridItem>
            <GridItem>
              <Box maxW="100%">
                <Text mb="2">Classes</Text>
                <MultiSelect
                  useBasicStyles
                  name="classes"
                  colorScheme="bg"
                  isMulti
                  value={selectedClasses}
                  closeMenuOnSelect
                  onChange={handleClasses}
                  options={selectedClasses?.[0]?.label != "All" ? classes : []}
                />
                {errors?.classes && <Text color="red">{errors.classes}</Text>}
              </Box>
            </GridItem>

            {createEventDetails.map((item, index) => {
              return (
                <>
                  <GridItem>
                    {
                      <Box maxW="100%">
                        <Text mb="2">{item.lable}</Text>
                        <Input
                          type={item.type}
                          name={item.name}
                          value={inputs?.item?.name}
                          onChange={(e) => handleChange(e)}
                          border="0px"
                          bg="bg.100"
                        />
                      </Box>
                    }
                    {errors?.[item?.name] && (
                      <Text color="red">{errors?.[item?.name]}</Text>
                    )}
                  </GridItem>
                </>
              );
            })}
          </Grid>

          <Flex justify="center" gap="8" pb="8" w="100%">
            <Box
              onClick={() =>
                navigate(`/role/${selectedRole}/ActivityGramEvent`)
              }
            >
              <NegativeButton text={"Cancel"} />
            </Box>{" "}
            <Box onClick={handleSubmit}>
              <PositiveButton text={"Create"} isLoading={loading} />
            </Box>
          </Flex>
          {/* <Flex justify="center" gap="4">
				<Button>Cancle</Button>
				<Button onClick={handleSubmit}>Save</Button>
			</Flex> */}
        </Flex>
      )}
    </>
  );
};

export default AgCreateEvent;
