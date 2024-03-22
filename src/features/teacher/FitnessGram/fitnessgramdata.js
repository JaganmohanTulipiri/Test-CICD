export const createEventData = {
	title: "CREATE EVENT",
	createEventDetails: [
		{
			id: 1,
			lable: "Event Name",
			name: "event_name",
			inputType: "text",
			placeHolder: "Enter Test Name",
		},
		{
			id: 2,
			lable: "Event Type",
			name: "event_type",
			inputType: "select",
			options: ["Post", "Pre", "Other"],
			placeHolder: "select classes",
		},

		{
			id: 3,
			lable: "Start Date",
			name: "start_date",
			inputType: "date",
			placeHolder: "Enter Date",
		},

		{
			id: 4,
			lable: "End Date",
			name: "end_date",
			inputType: "date",
			placeHolder: "Enter Date",
		},
	],
};
