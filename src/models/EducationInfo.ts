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
