import React from 'react';
import Helmet from 'react-helmet';
import { ExperienceInfo, Resume } from '../../../typings/Resume';
import Header from '../../components/Header/Header';
import sampleResume from '../../data/sample.json';

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

class ResumePage extends React.Component<ResumePageProps> {
  public static defaultProps = {
    data: sampleResume
  };

  public render() {
    const { data, data: { info: person } } = this.props;
    const fullName = `${person.firstName} ${person.middleName ? person.middleName + ' ' : ''}${person.lastName}`;

    return (
      <React.Fragment>
        <Helmet>
          <title>Resume {fullName}</title>
          <meta name="description" content={`${data.title} Resume for ${fullName}}`} />
        </Helmet>
        <Header
          firstName={person.firstName}
          lastName={person.lastName}
          subtitle={data.title}
          address=""
          phone={person.phone}
          email={person.email}
          linkedIn={data.links.linkedIn}
        />
        <section id="experiences">
          <h2>Experience</h2>
          {data.experience.map((x) => <Experience {...x} />)}
        </section>
      </React.Fragment>
    );
  }
}

export default ResumePage;
