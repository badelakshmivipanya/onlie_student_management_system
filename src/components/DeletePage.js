import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const DeletePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (!id) {
      console.error("Error: ID is undefined.");
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:3000/api/students/${id}`, {
        method: "DELETE",
      });
  
      if (!response.ok) {
        throw new Error(`Failed to delete. Status: ${response.status}`);
      }
  
      navigate("/");
    } catch (error) {
      console.error("Error deleting student:", error.message);
      alert("An error occurred while deleting the student. Please try again.");
    }
  };
  
  return (
    <div>
      <h2>Delete Student</h2>
      <p>Are you sure you want to delete this student?</p>
      <button onClick={handleDelete}>Yes, Delete</button>
      <button onClick={() => navigate("/")}>Cancel</button>
    </div>
  );
};

export default DeletePage;
