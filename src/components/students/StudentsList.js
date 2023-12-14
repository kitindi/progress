import React from "react";
import { useSelector } from "react-redux";

const StudentsList = () => {
  const students = useSelector((state) => state.students);
  return (
    <div>
      <h2>Students List</h2>
      <table></table>
      {students.map((student) => (
        <tr>
          <td>{student.firstName}</td>
          <td>{student.lastName}</td>
          <td>{student.gender}</td>
          <td>{student.class}</td>
          <td>{student.yearJoined}</td>
        </tr>
      ))}
    </div>
  );
};

export default StudentsList;
