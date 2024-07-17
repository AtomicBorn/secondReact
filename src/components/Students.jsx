import React from 'react';
import Student from './Student';

const Students = () => {
  const students = [
    { name: 'Ana', department: 'Arts', finalGrade: 95, status: 'Pass' },
    { name: 'Bob', department: 'Commerce', finalGrade: 82, status: 'Pass' },
    { name: 'Ash', department: 'Science', finalGrade: 80, status: 'Pass' },
    { name: 'Cid', department: 'Commerce', finalGrade: null,status: 'Fail' },
    { name: 'Love', department: 'Science', finalGrade: 85, status: 'Pass' },
    { name: 'Rimuru', department: 'Arts', finalGrade: 91, status: 'Pass' },
    { name: 'Grace', department: 'Science', finalGrade: 77, status: 'Pass' },
    { name: 'Aze', department: 'Arts', finalGrade: 88, status: 'Pass' },
    { name: 'Baby', department: 'Commerce', finalGrade: null, status: 'Fail' },
    { name: 'Rod', department: 'Commerce', finalGrade: 85, status: 'Pass' }
  ];


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>No.|</th>
            <th>&nbsp;Student Names &nbsp;|</th>
            <th>&nbsp;Department &nbsp;|</th>
            <th>&nbsp;Final Grade &nbsp;|</th>
            <th>&nbsp;Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <Student
              key={index}
              index={index + 1}
              name={student.name}
              department={student.department}
              finalGrade={student.finalGrade}
              status={student.status}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;