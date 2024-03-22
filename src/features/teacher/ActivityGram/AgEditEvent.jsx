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
  updateAgEvent,
} from "../teacherSlice";
import { AgCreateEventData } from "./AgData";
import { useDispatch, useSelector } from "react-redux";
import SuccessModal from "../../../components/SuccessModal";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import NegativeButton from "../../../components/NegativeButton";
import PositiveButton from "../../../components/PositiveButton";
import { validateFormData } from "../../../Utilities/FormValidation";
import { Skeleton } from "antd";

const AgEditEvent = () => {
  const { title, createEventDetails } = AgCreateEventData;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const params = useParams();

  // const eventId = location?.state?.eventId;

  const eventId = params?.eventId;

  console.log(eventId, "ag event id in ag");

  const userId = useSelector((state) => state.profile.userId);
  const selectedRole = useSelector((state) => state.profile.selectedRole);
  const token = useSelector((state) => state.profile.token);
  const schoolsList = useSelector((state) => state.teacher.schools);
  const classesList = useSelector((state) => state.teacher.classes);
  const loading = useSelector((state) => state.teacher.loading);
  const responseCode = useSelector((state) => state.teacher.responseCode);
  const eventEditDetails = useSelector(
    (state) => state.teacher.agEventDataById
  );

  console.log(eventEditDetails, "ag event data ");

  const [schools, setSchools] = useState(schoolsList);
  const [classes, setClasses] = useState(classesList);

  const [selectedSchools, setSelectedSchools] = useState([]);

  const [selectedClasses, setSelectedClasses] = useState([]);

  const [inputs, setInputs] = useState({
    event_name: "",
    event_type: "",
    start_date: "",
    end_date: "",
    schools: [],
    classes: [],
  });
  const [errors, setErrors] = useState({});
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
      setSelectedSchools(all_value.value);
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

  console.log(selectedClasses)

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    // let body = {
    //   ...inputs,
    //   schools: selectedSchools,
    //   classes: selectedClasses,
    //   updater_role: selectedRole,
    //   updated_by: userId,
    // };

    let errorObj = validateFormData(inputs);

    console.log(errorObj, "validation errors==========>");
    setErrors(errorObj);

    if (Object.keys(errorObj)?.length === 0) {
      let payload = {
        ...inputs,
        updater_role: selectedRole,
        updated_by: userId,
      };

      dispatch(updateAgEvent({ payload, token, eventId }));
    }
  };

  useEffect(() => {
    if (eventEditDetails && Object.keys(eventEditDetails)?.length) {
      setInputs({
        event_name: eventEditDetails?.event_name,
        start_date: eventEditDetails?.start_date?.split("T")[0],
        end_date: eventEditDetails?.end_date?.split("T")[0],
        schools: eventEditDetails?.ActivityGramSchool?.map(
          (school) => school.uuid
        ),
        classes: eventEditDetails?.ActivityGramClass?.map((clas) => clas.uuid),
      });
    }

    if (eventEditDetails?.ActivityGramSchool?.length) {
      let arr = eventEditDetails?.ActivityGramSchool?.map((school) => ({
        label: school.school_name,
        value: school.uuid,
      }));
      setSelectedSchools(arr);
    }

    if (eventEditDetails?.ActivityGramClass?.length) {
      let classArr = eventEditDetails?.ActivityGramClass?.map((clas) => ({
        label: clas.class_name,
        value: clas.uuid,
      }));
      setSelectedClasses(classArr);
    }
  }, [eventEditDetails]);


  console.log(classesList,"from 198")
  useEffect(() => {
    !schoolsList?.length && dispatch(getSchoolsList({ userId, token }));

    dispatch(getAgEventDataById({ token, eventId }));

    return () => {
      dispatch(setAgEventDataById({}));
    };
  }, []);

  useEffect(() => {
    dispatch(getClassesList({ body: { schools: inputs?.schools }, token }));

  }, [inputs?.schools]);

	useEffect(() => {
		let schoolOptions = [];

		const schoolUuidArray =
			schoolsList?.length &&
			schoolsList.map((each) => {
				schoolOptions.push({ label: each.school_name, value: each.uuid });
				return each.uuid;
			});

		schoolOptions.unshift({ label: "All", value: schoolUuidArray });
		
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

      classOptions.unshift({ label: "All", value: classUuidArr });
		
		setClasses(classOptions);
	}, [classesList]);

	console.log(selectedClasses,!selectedSchools.length,"from 672")
  return (
    <>
      {loading ? (
        <Skeleton />
      ) : (
        <Flex gap="4" direction="column">
          <Text>{title}</Text>
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
                  options={
                    selectedSchools?.length &&
                    selectedClasses?.[0]?.label != "All"
                      ? classes
                      : []
                  }
                />
                {errors?.classes && <Text color="red">{errors.classes}</Text>}
              </Box>
            </GridItem>

            {createEventDetails.map((item, index) => {
              return (
                <GridItem>
                  {
                    <Box maxW="100%">
                      <Text mb="2">{item.lable}</Text>
                      <Input
                        type={item.type}
                        name={item.name}
                        value={
                          item.type == "date"
                            ? inputs?.[item.name]?.split("T")[0] ?? null
                            : inputs?.[item.name] ?? null
                        }
                        // defaultValue={
                        //   item.type == "date"
                        //     ? eventEditDetails?.[item.name]?.split("T")[0]
                        //     : eventEditDetails?.[item.name]
                        // }
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
              <PositiveButton text={"Save"} isLoading={loading} />
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

export default AgEditEvent;
