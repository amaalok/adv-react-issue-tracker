import React from 'react';
import Card from '../Card/Card';
import { Issue } from '../Card/Card';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './IssueCard.module.css';

type Props = {
  list: Issue[];
  filterbypriority: string;
  filterbyassignee: string;
};
const IssueCards = ({ list, filterbypriority, filterbyassignee }: Props) => {
  const { t } = useTranslation();
  const [todoList, settodoList] = useState<Issue[]>([]);
  const [doneList, setdoneList] = useState<Issue[]>([]);
  const [inProgressList, setinProgressList] = useState<Issue[]>([]);
  const [blockedList, setblockedList] = useState<Issue[]>([]);
  const [filter1, setFilter1] = useState<Issue[]>([]);

  useEffect(() => {
    setFilter1(list);
  }, [list]);

  useEffect(() => {
    settodoList((pre) => filter1.filter((ele: any) => ele.status === 1));
    setdoneList((pre) => filter1.filter((ele: any) => ele.status === 3));
    setinProgressList((pre) => filter1.filter((ele: any) => ele.status === 2));
    setblockedList((pre) => filter1.filter((ele: any) => ele.status === 4));
  }, [filter1]);
  useEffect(() => {
    if (filterbyassignee === '' && filterbypriority === '') {
      setFilter1(list);
    } else if (filterbyassignee !== '' && filterbypriority === '') {
      setFilter1(list.filter((ele: any) => ele.assignee.id == filterbyassignee));
    } else if (filterbyassignee === '' && filterbypriority !== '') {
      setFilter1(list.filter((ele: any) => ele.priority == filterbypriority));
    } else if (filterbyassignee !== '' && filterbypriority !== '') {
      setFilter1(list.filter((ele: any) => ele.assignee.id == filterbyassignee));
      setFilter1(filter1.filter((ele: any) => ele.priority == filterbypriority));
    }
  }, [filterbyassignee, filterbypriority]);
  // useEffect(() => {
  //   if (filterbypriority === '') {
  //     setFilter1(list);
  //   } else {
  //     setFilter1(list.filter((ele: any) => ele.priority == filterbypriority));
  //   }
  // }, [filterbypriority]);
  return (
    <div className={classes.status}>
      <div className={classes['issue-list']}>
        <p className={classes.type}>{t('TO DO')}</p>
        {todoList &&
          todoList.map((issue: Issue) => {
            return <Card key={issue.id} issue={issue} />;
          })}
      </div>
      <div className={classes['issue-list']}>
        <p className={classes.type}>{t('DEVELOPMENT')}</p>
        {inProgressList &&
          inProgressList.map((issue) => {
            return <Card key={issue.id} issue={issue} />;
          })}
      </div>
      <div className={classes['issue-list']}>
        <p className={classes.type}>{t('TESTING')}</p>
        {doneList &&
          doneList.map((issue) => {
            return <Card key={issue.id} issue={issue} />;
          })}
      </div>
      <div className={classes['issue-list']}>
        <p className={classes.type}>{t('COMPLETED')}</p>
        {blockedList &&
          blockedList.map((issue) => {
            return <Card key={issue.id} issue={issue} />;
          })}
      </div>
    </div>
  );
};
export default IssueCards;
