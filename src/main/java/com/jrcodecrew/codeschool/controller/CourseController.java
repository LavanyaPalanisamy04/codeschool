package com.jrcodecrew.codeschool.controller;

import com.jrcodecrew.codeschool.dto.ChildDto;
import com.jrcodecrew.codeschool.dto.LoginDto;
import com.jrcodecrew.codeschool.dto.UserDto;
import com.jrcodecrew.codeschool.model.Child;
import com.jrcodecrew.codeschool.model.Course;
import com.jrcodecrew.codeschool.model.User;
import com.jrcodecrew.codeschool.response.LoginResponse;
import com.jrcodecrew.codeschool.service.CourseService;
import com.jrcodecrew.codeschool.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/course")
public class CourseController {
  private CourseService courseService;

  @Autowired
  public CourseController(CourseService courseService) {
    super();
    this.courseService = courseService;
  }

  @PostMapping("/addCourse")
  public ResponseEntity<Course> addCourse(@RequestBody Course course) {
    return new ResponseEntity<Course>(courseService.addCourse(course), HttpStatus.CREATED);
  }

  @GetMapping("/getCourse/{courseId}")
  public ResponseEntity<Course> getCourseById(@PathVariable Long courseId) {
    Course course = courseService.getCourseById(courseId);
    return ResponseEntity.ok(course);
  }
}
