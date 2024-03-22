export const validateString = (value) => {
	const regex = /^[a-zA-Z]+$/;
	return regex.test(value);
};

export const validateString2 = (value) => {
	const regex = /^[ A-Za-z0-9_@./#&+-]*$/
	return regex.test(value);
};
export const validateUserName = (value) => {
	const regex = /^[ A-Za-z0-9_@./#&+-]*$/
	return regex.test(value);
};
export const validateRequired = (value) => {
	return value !== "";
};

export const validateEmail = (value) => {
	const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
	return regex.test(value);
};

export const validatePhoneNumber = (value) => {
	const regex = /^[0-9]{10}$/;
	return regex.test(value);
};

export const validatePAN = (value) => {
	const regex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
	return regex.test(value);
};

export const validateAadhar = (value) => {
	const regex = /^[0-9]{12}$/;
	console.log("Aadhar Regex", regex.test(value));
	return regex.test(value);
};
export const validateNumber = (value) => {
	var regex = /^[0-9]*$/;
	return regex.test(value);
};

export const validateDate = (value) => {
	var regex = /^\d{4}-\d{2}-\d{2}$/;
	return regex.test(value);
};
export const validatePincode = (value) => {
	const regex = /^[0-9]{6}$/;
	return regex.test(value);
};
