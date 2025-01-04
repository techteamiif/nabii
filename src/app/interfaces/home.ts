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

export interface Slider {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  slug?: string;
  rank?: string;
}

export interface Team {
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

export interface Secretariat {
  first_name?: string;
  last_name?: string;
  image_url?: string;
  job_title?: string;
  profile?: string;
  email?: string;
  phone_number?: string;
  linked_in?: string;
  qualification?: string;
  rank?: number;
}

export interface ABoutUs {
  summary?: string;
  content?: string;
  image_url?: string;
  file_url?: string;
  mission?: string;
  vision?: string;
}

export interface FocusAreas {
  title?: string;
  content?: string;
  image_url?: string;
  id?: number;
}

export interface User {
  first_name?: string;
  last_name?: string;
  image_url?: string;
  id?: number;
}

export interface Job {
  title?: string;
  description?: string;
  location?: string;
  department?: string;
  closing_date?: string;
  status?: string;
  id?: number;
}

export interface Program {
  title?: string;
  brief?: string;
  image_url?: string;
  content?: string;
  year?: string;
  event_date?: string;
  event_time?: string;
  venue?: string;
  meeting_link?: string;
  benefits?: string;
  status?: string;
  benefits_image?: string;
  criteria?: string;
  criteria_image?: string;
  applications_open_date?: string;
  applications_close_date?: string;
  deal_summit_date?: string;
  sponsors?: string;
  id?: number;
}
