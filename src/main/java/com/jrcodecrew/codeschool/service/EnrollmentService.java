package com.jrcodecrew.codeschool.service;

import com.jrcodecrew.codeschool.dto.EnrollmentDto;
import com.jrcodecrew.codeschool.model.Course;
import com.jrcodecrew.codeschool.model.Enrollment;
import com.jrcodecrew.codeschool.model.Schedule;

import java.util.List;

public interface EnrollmentService {
    EnrollmentDto enrollChild(EnrollmentDto enrollemntDto);

    List<Course> getEnrolledCourses(Long childId);

    Enrollment addScheduleToEnrollment(Long scheduleId, Long enrollmentId);
}
