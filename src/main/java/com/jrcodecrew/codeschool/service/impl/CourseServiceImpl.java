package com.jrcodecrew.codeschool.service.impl;

import com.jrcodecrew.codeschool.model.Course;
import com.jrcodecrew.codeschool.repository.CourseRepository;
import com.jrcodecrew.codeschool.service.CourseService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CourseServiceImpl implements CourseService {
  private CourseRepository courseRepository;

  @Autowired
  public CourseServiceImpl(CourseRepository courseRepository) {
    super();
    this.courseRepository = courseRepository;
  }

  @Override
  public Course addCourse(Course course) {
    Course addedCourse =
        new Course(
            course.getCourse_id(),
            course.getCourseName(),
            course.getDescription(),
            course.getAgeGroup());
    return courseRepository.save(addedCourse);
  }

  @Override
  public Course getCourseById(Long courseId) {
    return courseRepository
        .findById(courseId)
        .orElseThrow(
            () ->
                new EntityNotFoundException(
                    "Course with Id : " + courseId.toString() + " not found"));
  }
}
