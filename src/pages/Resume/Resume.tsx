import React from "react";
import Helmet from "react-helmet";
import Header from "../../components/Header/Header";
import sampleResume from "../../data/sample.json";
import { EducationInfo } from "../../models/EducationInfo";
import { ExperienceInfo } from "../../models/ExperienceInfo";
import { Resume } from "../../models/Resume";
import { addressToString } from "../../utils/addressUtils";

export interface ResumePageProps {
  data: Resume;
}

const Experience: React.FC<ExperienceInfo> = ({
  company,
  designation,
  rolesAndResponsibility
}) => (
  <article>
    <header>
      <h3>{company}</h3>
      <p>{designation}</p>
    </header>
    <p>
      <ul>
        {rolesAndResponsibility.map((x) => <li>{x}</li>)}
      </ul>
    </p>
  </article>
);

const Education: React.FC<EducationInfo> = ({
  university,
  course,
  grade,
  endDate,
  startDate
}) => (
  <article>
    <header>
      <h3>{course}</h3>
      <p>{university} <span className="duration">{startDate} - {endDate}</span></p>
    </header>
    <p>
      {grade.type}: {grade.value}
    </p>
  </article>
);

class ResumePage extends React.Component<ResumePageProps> {
  public static defaultProps = {
    data: sampleResume
  };

  public render() {
    const { data, data: { info: person } } = this.props;
    const fullName = `${person.firstName} ${person.middleName ? person.middleName + " " : ""}${person.lastName}`;
    const address = addressToString(person.address);

    return (
      <React.Fragment>
        <Helmet>
          <title>Resume | {fullName}</title>
          <meta name="description" content={`${data.title} Resume for ${fullName}}`} />
        </Helmet>
        <Header
          address={address}
          firstName={person.firstName}
          lastName={person.lastName}
          subtitle={data.title}
          phone={person.phone}
          email={person.email}
          linkedIn={data.links.linkedIn}
        />
        <section id="experiences">
          <h2>Experience</h2>
          {data.experience.map((x) => <Experience {...x} />)}
        </section>
        <section id="education">
          <h2>Education</h2>
          {data.education.map((x) => <Education {...x} />)}
        </section>
      </React.Fragment>
    );
  }
}

export default ResumePage;
