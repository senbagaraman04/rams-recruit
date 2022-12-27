package com.rams.ramsrecruit.repository;

import com.rams.ramsrecruit.entity.Candidate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Collection;
import java.util.List;

public interface CandidateRepository2 extends JpaRepository<Candidate, Integer> {

    @Query(value = "Select * from Candidate", nativeQuery = true)
    Collection<Candidate> getall();

    @Query(value = "Select * from Candidate", nativeQuery = true)
    List getall2();
}
