import { writable } from 'svelte/store';

export const DESTINATION = [{ label: 'United States' }, { label: 'F-1 Transfer within US' }];

export const DEGREE = [
	{ label: 'Undergraduate' },
	{ label: "Master's" },
	{ label: 'PhD' },
	{ label: 'MPH or PharmD' },
	{ label: 'Other' }
];

export const MAJORS = [
	{ label: 'Computer Science' },
	{ label: 'Engineering' },
	{ label: 'Sciences' },
	{ label: 'Business Studies' },
	{ label: 'Humanities' },
	{ label: 'Social Sciences' },
	{ label: 'Health Sciences' },
	{ label: 'Miscellaneous' }
];

export const CURRICULUM = ['NCTB', 'English Version', 'English Medium'];
export const LEVEL = ['SSC', 'HSC', 'O Level', 'A Level', "Bachelor's", "Master's"];

export const EP_CHOICES = [
	{ value: 'ielts', label: 'IELTS' },
	{ value: 'toefl', label: 'TOEFL' },
	{ value: 'duolingo', label: 'Duolingo' },
	{ value: 'no-test', label: 'Wish to get enrolled without any test' },
	{ value: 'moi', label: 'Wish to get enrolled with Medium Of Instruction' },
	{ value: 'plan-to', label: 'Wish to take IELTS' }
];

export const phoneRegex =
	/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
