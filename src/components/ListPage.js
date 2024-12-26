import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListPage = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({
    Name: "",
    DOB: "",
    CourseName: "",
    Fee: "",
    Duration: "",
  });

  useEffect(() => {
    // Simulating fetching data from the backend API
    const mockStudents = [
      {
        StudentId: 1,
        Name: "John Doe",
        DOB: "1995-05-15",
        CourseName: "Computer Science",
        Fee: 1000,
        Duration: 48,
      },
      {
        StudentId: 2,
        Name: "Jane Smith",
        DOB: "1996-08-21",
        CourseName: "Mechanical Engineering",
        Fee: 1200,
        Duration: 48,
      },
      {
        StudentId: 3,
        Name: "Mike Johnson",
        DOB: "1997-02-10",
        CourseName: "Civil Engineering",
        Fee: 1100,
        Duration: 48,
      },
    ];

    setStudents(mockStudents);
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete the student with ID ${id}?`
    );
    if (confirmDelete) {
      setStudents((prev) => prev.filter((student) => student.StudentId !== id));
      alert(`Student with ID ${id} has been deleted.`);
    }
  };

  const handleAddStudent = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!newStudent.Name || !newStudent.DOB || !newStudent.CourseName || !newStudent.Fee || !newStudent.Duration) {
      alert("All fields are required.");
      return;
    }

    // Check for unique names (optional)
    if (students.some((student) => student.Name === newStudent.Name)) {
      alert("A student with this name already exists.");
      return;
    }

    const newStudentData = {
      ...newStudent,
      StudentId: new Date().getTime(), // Generate a unique ID
      Fee: parseFloat(newStudent.Fee), // Convert Fee to a number
      Duration: parseInt(newStudent.Duration, 10), // Convert Duration to a number
    };

    setStudents((prev) => [...prev, newStudentData]);
    setNewStudent({ Name: "", DOB: "", CourseName: "", Fee: "", Duration: "" });
    alert("New student added successfully!");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  

  return (
    <div>
      <h2>Student List</h2>
      {students.length === 0 ? (
        <p>No students available. Please add some students.</p>
      ) : (
        <table border="1" cellPadding="10" style={{ width: "100%", textAlign: "left" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>DOB</th>
              <th>Course</th>
              <th>Fee ($)</th>
              <th>Duration (months)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.StudentId}>
                <td>{student.Name}</td>
                <td>{student.DOB}</td>
                <td>{student.CourseName}</td>
                <td>{student.Fee}</td>
                <td>{student.Duration}</td>
                <td>
                  <Link to={`/students/${student.StudentId}`}>Details</Link> |{" "}
                  <Link to={`/students/edit/${student.StudentId}`}>Edit</Link> |{" "}
                  <button onClick={() => handleDelete(student.StudentId)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <h3>Add New Student</h3>
      <form onSubmit={handleAddStudent} style={{ marginTop: "20px" }}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="Name"
            value={newStudent.Name}
            onChange={handleInputChange}
            placeholder="Enter full name"
            required
          />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="DOB"
            value={newStudent.DOB}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Course Name:</label>
          <input
            type="text"
            name="CourseName"
            value={newStudent.CourseName}
            onChange={handleInputChange}
            placeholder="Enter course name"
            required
          />
        </div>
        <div>
          <label>Fee ($):</label>
          <input
            type="number"
            name="Fee"
            value={newStudent.Fee}
            onChange={handleInputChange}
            placeholder="Enter course fee"
            required
          />
        </div>
        <div>
          <label>Duration (months):</label>
          <input
            type="number"
            name="Duration"
            value={newStudent.Duration}
            onChange={handleInputChange}
            placeholder="Enter duration in months"
            required
          />
        </div>
        <button type="submit" style={{ marginTop: "10px" }}>
          Add Student
        </button>
      </form>
    </div>
  );
};

export default ListPage;
