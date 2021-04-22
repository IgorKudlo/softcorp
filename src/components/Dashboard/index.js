import React, {useEffect, useState} from 'react';
import {DashboardHead, DashboardTitle} from './DashboardElements';
import {MONTHS} from './stubs';
import Select from '../Select';
import Table from '../Table';

const Dashboard = () => {

  const [currentYear, setCurrentYear] = useState(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const [month, setMonth] = useState(MONTHS[0].label);
  const handleChangeMonth = (selectMonth) => {
    setMonth(selectMonth);
  };

  return (
    <>
      <DashboardHead>
        <DashboardTitle>All Shifts for <span>{month} {currentYear}</span></DashboardTitle>
        <Select options={MONTHS} handleChange={handleChangeMonth} currentYear={currentYear} />
      </DashboardHead>
      <Table/>
    </>
  )
}

export default Dashboard;