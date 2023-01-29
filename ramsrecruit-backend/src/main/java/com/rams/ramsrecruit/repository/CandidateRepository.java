/**
 * https://github.com/senbagaraman04/rams-recruit
 */

package com.rams.ramsrecruit.repository;

import com.rams.ramsrecruit.entity.Candidate;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CandidateRepository extends CrudRepository<Candidate, Integer> {

    @Query(value = "Select * from candidate c", nativeQuery = true)
    Candidate[] getall2();


}

