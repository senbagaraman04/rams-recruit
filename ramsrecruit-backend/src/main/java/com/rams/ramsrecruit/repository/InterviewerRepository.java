/**
 * https://github.com/senbagaraman04/rams-recruit
 */

package com.rams.ramsrecruit.repository;

import com.rams.ramsrecruit.entity.Interviewer;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InterviewerRepository extends CrudRepository<Interviewer, Integer> {

    @Query(value = "select * from interviewer i", nativeQuery = true)
    Interviewer[] getallInterviewer();
}
