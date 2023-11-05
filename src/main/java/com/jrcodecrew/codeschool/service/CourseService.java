package com.jrcodecrew.codeschool.service;

import com.jrcodecrew.codeschool.model.Course;

public interface CourseService {
  Course addCourse(Course course);
  Course getCourseById(Long courseId);
}
