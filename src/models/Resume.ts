import { EducationInfo } from "./EducationInfo";
import { ExperienceInfo } from "./ExperienceInfo";
import { PersonalInfo } from "./PersonalInfo";
import { ProjectInfo } from "./ProjectInfo";
import { Publication } from "./Publication";
import { Reference } from "./Reference";

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