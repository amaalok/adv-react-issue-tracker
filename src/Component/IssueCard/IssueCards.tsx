import Card from '../Card/Card';
import React from 'react';
import './IssueCard.css';
import { Issue } from '../Card/Card';
// import { useData } from "../dataContext";
import { useEffect, useState } from 'react';

type Props = {
  list: Issue[];
  filterbypriority: string;
  filterbyassignee: string;
};

export default function IssueCards({ list, filterbypriority, filterbyassignee }: Props) {
  //   const [list, setlist] = useState<Issue[]>([]);
  const [todoList, settodoList] = useState<Issue[]>([]);
  const [doneList, setdoneList] = useState<Issue[]>([]);
  const [inProgressList, setinProgressList] = useState<Issue[]>([]);
  const [blockedList, setblockedList] = useState<Issue[]>([]);
  //   const { issuelist, searchlist } = useData();
  const [filter1, setFilter1] = useState([] as Issue[]);
  const [filter2, setFilter2] = useState([] as Issue[]);
  useEffect(() => {
    settodoList((pre) => filter2.filter((ele: any) => ele.status === 1));
    setdoneList((pre) => filter2.filter((ele: any) => ele.status === 3));
    setinProgressList((pre) => filter2.filter((ele: any) => ele.status === 2));
    setblockedList((pre) => filter2.filter((ele: any) => ele.status === 4));
    console.log(todoList);
  }, [filter2]);
  useEffect(() => {
    if (filterbyassignee === '') {
      setFilter1([...list]);
    } else {
      setFilter1([...list.filter((ele: any) => ele.assignee.id == filterbyassignee)]);
    }
    console.log(filter1);
    console.log(list);
    setFilter2(filter2);
  }, [filterbyassignee]);
  useEffect(() => {
    if (filterbypriority === '') {
      setFilter2([...filter1]);
    } else {
      setFilter2([...filter1.filter((ele: any) => ele.assignee.id == filterbypriority)]);
    }
    console.log(filter2);
  }, [filterbypriority]);
  return (
    <div className="status">
      <div className="issue-list">
        <p className="type">TO DO</p>
        {todoList &&
          todoList.map((issue: Issue) => {
            return <Card key={issue.id} issue={issue} />;
          })}
      </div>
      <div className="issue-list">
        <p className="type">DEVELOPMENT</p>
        {inProgressList &&
          inProgressList.map((issue) => {
            return <Card key={issue.id} issue={issue} />;
          })}
      </div>
      <div className="issue-list">
        <p className="type">TESTING</p>
        {doneList &&
          doneList.map((issue) => {
            return <Card key={issue.id} issue={issue} />;
          })}
      </div>
      <div className="issue-list">
        <p className="type">COMPLETED</p>
        {blockedList &&
          blockedList.map((issue) => {
            return <Card key={issue.id} issue={issue} />;
          })}
      </div>
    </div>
  );
}
