import React from 'react';

const Student = ({ index, name, department, finalGrade, status }) => {
    const statusStyle = {
    color: status === 'Pass' ? 'green' : 'red',
    };
    
  return (
    <tr>
      <td>&nbsp;{index}</td>
      <td>&nbsp;&nbsp;{name}</td>
      <td>&nbsp;{department}</td>
      <td>&nbsp;&nbsp;&nbsp;{status === 'Pass' ? finalGrade : ' '}</td>
      <td style={statusStyle}>&nbsp;{status}</td>
    </tr>
  );
};

export default Student;