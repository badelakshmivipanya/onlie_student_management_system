import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddEditPage = ({ handleUpdate }) => {
  const [student, setStudent] = useState({
    name: "",
    dob: "",
    courseName: "",
    fee: "",
    duration: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      // Fetch the student data if editing
      fetch(`http://localhost:3000/api/students/${id}`)
        .then((response) => response.json())
        .then((data) =>
          setStudent({
            name: data.name || "",
            dob: data.dob || "",
            courseName: data.courseName || "",
            fee: data.fee || "",
            duration: data.duration || "",
          })
        )
        .catch((error) => console.error("Error fetching student:", error));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!student.name || !student.dob || !student.courseName || !student.fee || !student.duration) {
      alert("All fields are required");
      return;
    }

    const method = id ? "PUT" : "POST";
    const url = id
      ? `http://localhost:3000/api/students/${id}`
      : "http://localhost:3000/api/students";

    fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    })
      .then((response) => response.json())
      .then((data) => {
        handleUpdate(data); // Update the parent list
        navigate("/students"); // Navigate back to the list page
      })
      .catch((error) => console.error("Error submitting form:", error));
  };

  return (
    <div>
      <h2>{id ? "Edit Student" : "Add New Student"}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={student.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={student.dob}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Course Name:</label>
          <input
            type="text"
            name="courseName"
            value={student.courseName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Fee:</label>
          <input
            type="number"
            name="fee"
            value={student.fee}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Duration (months):</label>
          <input
            type="number"
            name="duration"
            value={student.duration}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">{id ? "Update" : "Add"}</button>
      </form>
    </div>
  );
};

export default AddEditPage;
