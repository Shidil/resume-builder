import React from "react";
import Helmet from "react-helmet";
import Header from "../../components/Header/Header";
import sampleResume from "../../data/sample.json";
import { EducationInfo } from "../../models/EducationInfo";
import { ExperienceInfo } from "../../models/ExperienceInfo";
import { ProjectInfo } from "../../models/ProjectInfo";
import { Publication } from "../../models/Publication";
import { Resume } from "../../models/Resume";
import { addressToString } from "../../utils/addressUtils";

export interface ResumePageProps {
  data: Resume;
}

const Experience: React.FC<ExperienceInfo> = ({
  company,
  designation,
  rolesAndResponsibility,
}) => (
  <article>
    <header>
      <h3>{company}</h3>
      <p>{designation}</p>
    </header>
    <p>
      <ul>
        {rolesAndResponsibility.map((x) => (
          <li>{x}</li>
        ))}
      </ul>
    </p>
  </article>
);

const Education: React.FC<EducationInfo> = ({
  university,
  course,
  grade,
  endDate,
  startDate,
}) => (
  <article>
    <header>
      <h3>{course}</h3>
      <p>
        {university}{" "}
        <span className="duration">
          {startDate} - {endDate}
        </span>
      </p>
    </header>
    <p>
      {grade.type}: {grade.value}
    </p>
  </article>
);

const Project: React.FC<ProjectInfo> = ({
  projectName,
  fromDate,
  toDate,
  companyCode,
  description,
  rolesAndResponsibilities,
}) => (
  <article>
    <header>
      <h3>{projectName}</h3>
      <p>{description}</p>
      <p>
        from: {fromDate} to {toDate}
      </p>
    </header>
    <p>
      <ul>
        {rolesAndResponsibilities.map((x) => (
          <li> {x} </li>
        ))}
      </ul>
    </p>
  </article>
);

const PublishedItem: React.FC<Publication> = ({ title, year, link }) => (
  <article>
    <header>
      <h3>{title}</h3>
      <p> {year} </p>
    </header>
    <p>
      <a href={link}>{link}</a>
    </p>
  </article>
);

class ResumePage extends React.Component<ResumePageProps> {
  public static defaultProps = {
    data: sampleResume,
  };

  public render() {
    const {
      data,
      data: { info: person },
    } = this.props;
    const fullName = `${person.firstName} ${
      person.middleName ? person.middleName + " " : ""
    }${person.lastName}`;
    const address = addressToString(person.address);

    return (
      <React.Fragment>
        <Helmet>
          <title>Resume | {fullName}</title>
          <meta
            name="description"
            content={`${data.title} Resume for ${fullName}}`}
          />
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
          {data.experience.map((x) => (
            <Experience {...x} />
          ))}
        </section>
        <section id="education">
          <h2>Education</h2>
          {data.education.map((x) => (
            <Education {...x} />
          ))}
        </section>
        <section id="projects">
          <h2>Key Projects</h2>
          {data.keyProjects.map((x) => (
            <Project {...x} />
          ))}
        </section>
        <section id="publications">
          <h2>Publications</h2>
          {data.publications.map((x) => (
            <PublishedItem {...x} />
          ))}
        </section>
      </React.Fragment>
    );
  }
}

export default ResumePage;
