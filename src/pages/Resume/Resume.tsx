import React from 'react';
import { Resume } from '../../../typings/Resume';
import Header from '../../components/Header/Header';

export interface ResumePageProps {
  data: Resume;
}

class ResumePage extends React.Component<ResumePageProps> {
  public render() {
    const { data } = this.props;

    return (
      <React.Fragment>
        <Header
          firstName={data.info.firstName}
          lastName={data.info.lastName}
          subtitle={data.title}
          address=""
        />
        
      </React.Fragment>
    );
  }
}

export default ResumePage;
