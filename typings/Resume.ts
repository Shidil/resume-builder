export interface Address {
  city: string;
  state: string;
  country: string;
  pin: string;
}

export interface PersonalInfo {
  firstName: string;
  middleName?: string;
  lastName: string;
  address: Address;
  phone: string;
  email: string;
}

export interface EducationInfo {
  course: string;
  courseAbbreviation: string;
  university: string;
  grade: {
    type: string;
    value: number | string
  };
  startDate: string;
  endDate: string;
}

export interface ExperienceInfo {
  designation: string;
  company: string;
  fromDate: string;
  toDate: string;
  abbreviation: string;
  rolesAndResponsibility: string[];
}

export interface ProjectInfo {
  projectName: string;
  companyCode: string;
  fromDate: string;
  toDate: string;
  description: string;
  rolesAndResponsibilities: string[];
}

export interface Publication {
  title: string;
  year: string;
  link: string;
}

export interface Reference {
  fullName: string;
  title: string;
  company: string;
  contact: {
    phone: string,
    email: string
  };
}

export interface Resume {
  info: PersonalInfo;
  title: string;
  education: EducationInfo[];
  experience: ExperienceInfo[];
  keyProjects: ProjectInfo[];
  achievements: string[];
  publications: Publication[];
  references: Reference[];
  interests: string[];
  languages: string[];
  links: {
    facebook?: string;
    linkedIn?: string;
    twitter?: string;
    github?: string;
    others?: Array<{
      name: string;
      url: string;
    }>
  };
}