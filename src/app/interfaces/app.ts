export interface IifAbout {
	id?: any;
	summary?: any;
	content?: any;
	imageUrl?: any;
	fileUrl?: any;
	mission?: any;
	vision?: any;
	address?: any;
	phoneNumber?: any;
	email?: any;
}

export interface IifContactUs {
	firstName?: string;
	lastName?: string;
	email?: string;
	phoneNumber?: string;
	subject?: string;
	message?: string;
	id?: string;
}

export interface Newsletter {
	name?: string;
	email?: string;
}

export interface Contact {
	address?: string;
	email?: string;
	phoneNumber?: string;
}

export interface Blog {
	id?: string;
	category?: string;
	title?: string;
	imageUrl?: string;
	fileUrl?: string;
	brief?: string;
	content?: string;
	slug?: string;
	author?: string;
	createdAt?: any;
}

export interface Audio {
	fileUrl: string;
	intro: string;
	outro: string;
	title: string;
	thumbnail: string;
}

export interface Footer {
	id?: string;
	logo?: string;
	intro?: string;
	contacts?: any;
	usefulLinks?: any;
	companies?: any;
}

export interface FooterUsefulLinks {
	id?: string;
	title?: string;
	url?: any;
}

export interface FooterCompanies {
	id?: string;
	title?: string;
	url?: any;
}

export interface Home {
	logo?: string;
	subsidiaryTitle?: string;
	subsidiaryContent?: string;
	subsidiaryLink?: string;
	welcomeMessageTitle?: string;
	welcomeMessageSubtitle?: string;
	welcomeMessage?: string;
	welcomeMessageImage?: string;
	welcomeMessageSignature?: string;
	welcomeMessageAuthor?: string;
	callToActionTitle?: string;
	callToActionUrl?: string;
}

export interface Team {
	firstName?: string;
	lastName?: string;
	imageUrl?: string;
	jobTitle?: string;
	profile?: string;
	email?: string;
	phoneNumber?: string;
	linkedIn?: string;
	rank?: number;
	id?: string;
}

export interface BoardMember {
	first_name?: string;
	last_name?: string;
	image_url?: string;
	job_title?: string;
	profile?: string;
	email?: string;
	phone_number?: string;
	linked_in?: string;
	rank?: number;
}

export interface FocusAreas {
	title?: string;
	content?: string;
	image_url?: string;
	id?: number;
}

export interface SocialMedia {
	id?: string;
	icon: any;
	url?: string;
	title?: string;
}

export interface TopBar {
	email?: string;
	phone_number?: string;
	emailIcon?: string;
	phoneIcon?: boolean;
	title?: string;
	address?: string;
	city?: string;
	state?: string;
	country?: string;
	status?: string;
	is_preferred?: string;
}

export interface Partner {
	id?: string;
	url?: string;
	title?: string;
	imageUrl?: string;
}

export interface Gallery {
	id?: string;
	title?: string;
	imageUrl?: string;
}

export interface Volunteer {}

export interface Slider {
	id?: any;
	title?: any;
	subtitle?: any;
	description?: any;
	imageUrl?: any;
	url?: any;
}
