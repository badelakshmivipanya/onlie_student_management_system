import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const { id } = useParams(); // Get student ID from URL
  const [student, setStudent] = useState(null);

  useEffect(() => {
    // Fetching student details by ID from the mock data or API
    const mockStudents = [
      {
        StudentId: 1,
        Name: "John Doe",
        DOB: "1995-05-15",
        CourseName: "Computer Science",
        Fee: "$1000",
        Duration: "4 years"
      },
      {
        StudentId: 2,
        Name: "Jane Smith",
        DOB: "1996-08-21",
        CourseName: "Mechanical Engineering",
        Fee: "$1200",
        Duration: "4 years"
      },
      {
        StudentId: 3,
        Name: "Mike Johnson",
        DOB: "1997-02-10",
        CourseName: "Civil Engineering",
        Fee: "$1100",
        Duration: "4 years"
      }
    ];

    // Find the student by ID
    const studentDetails = mockStudents.find(student => student.StudentId === parseInt(id));
    setStudent(studentDetails);
  }, [id]);

  if (!student) {
    return <p>Loading student details...</p>;
  }

  return (
    <div>
      <h2>Student Details</h2>
      <table>
        <tbody>
          <tr>
            <td><strong>Name:</strong></td>
            <td>{student.Name}</td>
          </tr>
          <tr>
            <td><strong>DOB:</strong></td>
            <td>{student.DOB}</td>
          </tr>
          <tr>
            <td><strong>Course:</strong></td>
            <td>{student.CourseName}</td>
          </tr>
          <tr>
            <td><strong>Fee:</strong></td>
            <td>{student.Fee}</td>
          </tr>
          <tr>
            <td><strong>Duration:</strong></td>
            <td>{student.Duration}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DetailsPage;
