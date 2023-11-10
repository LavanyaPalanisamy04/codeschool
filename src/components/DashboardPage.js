// File: DashboardPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './DashboardPage.css'; // Import your CSS file
import CourseList from './CourseList'; // Import your CourseList component

function DashboardPage() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [availableCourses, setAvailableCourses] = useState([]);

  useEffect(() => {
    // Fetch enrolled courses and available courses from your database API
    fetch('your-api-endpoint-for-enrolled-courses') // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => setEnrolledCourses(data));

    fetch('your-api-endpoint-for-available-courses') // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => setAvailableCourses(data));
  }, []);

  // Limit the number of displayed courses to a maximum of 5
  const limitedEnrolledCourses = enrolledCourses.slice(0, 5);
  const limitedAvailableCourses = availableCourses.slice(0, 5);

  const handleLogout = () => {
    // Implement your logout logic here
  };

  return (
    <div>
      <nav className="top-navbar">
        <Link to="/dashboard" className="navbar-logo">
          CodeSchool
        </Link>
        <div className="navbar-links">
          <button onClick={handleLogout} className="logout-button">Logout</button>
        </div>
      </nav>
      <div className="dashboard-container">
        <CourseList title="Enrolled Courses" courses={limitedEnrolledCourses} />
        <CourseList title="Available Courses" courses={limitedAvailableCourses} />
      </div>
    </div>
  );
}

export default DashboardPage;
