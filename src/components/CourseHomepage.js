import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function CourseHomepage({ course }) {
  const { isEnrolled } = useParams(); // Access the URL parameter

  // Rest of your component code remains the same

  return (
    <div className="course-homepage">
      {/* Your component code */}
      {isEnrolled === 'enrolled' ? (
        <div>
          {/* Display the enrolled content */}
        </div>
      ) : (
        <div>
          {/* Display the not enrolled content */}
        </div>
      )}
    </div>
  );
}

export default CourseHomepage;
