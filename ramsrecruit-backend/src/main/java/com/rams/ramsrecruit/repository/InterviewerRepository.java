package com.rams.ramsrecruit.repository;

import com.rams.ramsrecruit.entity.Interviewer;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InterviewerRepository extends CrudRepository<Interviewer, Integer> {

    @Query(value = "Select * from interviewer", nativeQuery = true)
    Interviewer[] getallInterviewer();
}
