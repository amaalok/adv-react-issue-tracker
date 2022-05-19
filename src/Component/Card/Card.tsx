import React from 'react';
import { useTranslation } from 'react-i18next';
import profile from '../../assests/images/profile.png';
import classes from './Card.module.css';
export interface Issue {
  assignee: assignee;
  createdBy: assignee;
  createdOn: string;
  description: string;
  id: string;
  priority: number;
  projectID: string;
  sprint: string;
  status: number;
  storyPoint: number;
  summary: string;
  tags: string[];
}

export interface assignee {
  id: number;
  name: string;
  email: string;
  teamName: string;
  desination: string;
}

interface Props {
  issue: Issue;
}

const Card = (props: any) => {
  const { t } = useTranslation();

  let priorityType = 'high';
  if (props.issue.priority === 2) priorityType = 'medium';
  if (props.issue.priority === 1) priorityType = 'low';
  return (
    <React.Fragment>
      <div className={classes['issue-container']}>
        <div className={classes['issue-details']}>
          <h5>
            {t('ID')}: {props.issue.id}
          </h5>
          <h5>{props.issue.createdOn.split('T')[0].split('-').reverse().join('-')}</h5>
        </div>
        <div className={classes['issue-description']}>
          <h5>{props.issue.description}</h5>
          <p>{props.issue.summary}</p>
        </div>
        <div className={classes['assignee-details']}>
          <div className={classes['assignee-name']}>
            <img src={profile} alt="" /> {props.issue.assignee.name}
          </div>
          <div className={classes['issue-priority']}>
            <p className={classes.priority}>{t('Priority')}</p>
            <p
              className={
                priorityType === 'high'
                  ? `${classes.high}`
                  : priorityType === 'medium'
                  ? `${classes.medium}`
                  : `${classes.low}`
              }>
              {priorityType}
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Card;
