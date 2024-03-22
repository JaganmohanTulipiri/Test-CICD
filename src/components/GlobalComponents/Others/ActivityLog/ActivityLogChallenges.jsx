import {
	Box,
	Button,
	Card,
	CardBody,
	Flex,
	HStack,
	Image,
	SimpleGrid,
	Stack,
	Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

import fitnessLoginExcerciseImage from "../../../../assets/images/Physical education-pana.png";
import ActivityModalSkeleton from "../ActivityModalSkeleton";
import { CalendarIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import calendarImg from "../../../../assets/images/Icon awesome-calendar-alt@2x.png";

const ActivityLogChallenges = (props) => {
	const listItems = useSelector(
		(state) => state?.profile?.activityLogEvents?.data?.response,
	);

	console.log("In ActivityLogChallenges", listItems);

	const [viewAllEventsButtonsClicked, setViewAllEventsButtonsClicked] =
		useState(false);

	const [isViewDataClicked, setIsViewDataClicked] = useState(false);

	const [selectedCardData, setSelectedCardData] = useState(false);

	const [testEventsList, setEestEventsList] = useState(listItems.slice(0, 6));

	const showAllEventsButtonClicked = () => {
		setViewAllEventsButtonsClicked(true);

		setEestEventsList(listItems.slice(0, listItems.length));
	};

	const showLessEventsButtonClicked = () => {
		setViewAllEventsButtonsClicked(false);
		setEestEventsList(listItems.slice(0, 6));
	};

	const viewDataButtonClicked = (selectedItem) => {
		setSelectedCardData(selectedItem);

		setIsViewDataClicked(true);
	};

	const smartCoachButtonClicked = (value) => {
		console.log(value, "iam value");
		setIsViewDataClicked(value);
	};

	console.log(isViewDataClicked, "value");
	return (
		<>
			<Box display="flex" justifyContent="center" h="full" w="full">
				<Flex
					h="full"
					direction="column"
					justifyContent="flex-start"
					alignItems="stretch"
				>
					<Flex>
						<Box px="4" mt={50} mx="3">
							<Text>ACTIVITYGRAM TEST EVENTS</Text>
						</Box>
					</Flex>

					<Box
						h="full"
						p="2"
						display="flex"
						flexDirection="column"
						justifyContent="space-between"
					>
						<Box
							display="flex"
							flexDirection="row"
							justifyContent="center"
							alignItems="center"
							m={{ md: 0, lg: 0 }}
							p="0"
							flexWrap="wrap"
							flexBasis="auto"
						>
							<SimpleGrid columns={{ md: 2, lg: 3 }} rowGap={5} columnGap={5}>
								{testEventsList &&
									testEventsList?.map((item) => (
										<Card
											w={{ md: 300, lg: 270, xl: 400 }}
											boxShadow="lg"
											border="1px"
											borderColor="white"
											borderRadius="15"
											p="0"
											mx={{ md: "2", lg: "4" }}
											key={item.id}
										>
											<CardBody p="0">
												<Stack spacing="2">
													<Box
														bgColor="#E7F1FF"
														border="1px"
														borderColor="#E7F1FF"
														borderRadius="3"
														w="100%"
														px="2"
														py="1.5"
													>
														<Text color="black-2" textStyle="h4">
															{item.challenge_name && item.challenge_name}
														</Text>
													</Box>
													<Flex
														justifyContent="space-between"
														alignItems="center"
														px="3"
													>
														<Flex
															direction="column"
															justifyContent="space-between"
															spacing="3"
														>
															<Text fontSize="sm" pb="2">
																{item.challenge_type && item.challenge_type}
															</Text>
															<HStack spacing="2">
																<Box width="6" height="6">
																	<Image
																		src={item.calendar_type}
																		alt="calendar"
																		w="full"
																		h="full"
																	/>
																</Box>

																<Text pt="2" fontSize="sm">
																	{item.start_date && item.start_date}
																</Text>
															</HStack>
														</Flex>

														<Box width="20" height="20">
															<Image
																src={calendarImg}
																objectFit="cover"
																alt="calendar"
															/>
														</Box>
													</Flex>
												</Stack>
												<Flex justifyContent="center" alignItems="center">
													<Text
														pt="2"
														pb="6"
														fontSize="sm"
														as="a"
														cursor="pointer"
														onClick={() => viewDataButtonClicked(item)}
													>
														{item.button}
													</Text>
												</Flex>
											</CardBody>
										</Card>
									))}
							</SimpleGrid>
						</Box>

						<Flex
							justifyContent="space-between"
							alignItems="center"
							m={{ md: 0, lg: 0, xl: 5 }}
							w="full"
							pt="5"
						>
							<Box w={{ md: 40, lg: 60, xl: 60 }} px="5">
								<Image src={fitnessLoginExcerciseImage} alt="excercise" />
							</Box>

							<Box
								display="flex"
								justifyContent="flex-end"
								alignItems="center"
								mt="5"
							>
								{viewAllEventsButtonsClicked ? (
									<Button
										bgColor="fit"
										textColor="white"
										borderRadius="20"
										px="5"
										mr="5"
										onClick={showLessEventsButtonClicked}
									>
										Show Less
									</Button>
								) : (
									<Button
										bgColor="fit"
										textColor="white"
										borderRadius="20"
										px="5"
										mr="5"
										onClick={showAllEventsButtonClicked}
									>
										View All Events
									</Button>
								)}

								<Card>
									<CardBody>
										<Text w="xl">
											ActivityGram records a sample of how much time you spend
											moving and resting during the day - either at school, or
											at home.
										</Text>
										<Text>For best results, be as accurate as you can!</Text>
									</CardBody>
								</Card>
							</Box>
						</Flex>
					</Box>
				</Flex>

				{isViewDataClicked ? (
					<ActivityModalSkeleton
						isViewDataClicked={isViewDataClicked}
						selectedCardData={selectedCardData}
						smartCoachButtonClicked={smartCoachButtonClicked}
					/>
				) : null}
			</Box>
		</>
	);
};

export default ActivityLogChallenges;
