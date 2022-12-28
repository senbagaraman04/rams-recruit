/**
 * https://github.com/senbagaraman04/rams-recruit
 */
package com.rams.ramsrecruit.service;

import com.rams.ramsrecruit.entity.Candidate;
import com.rams.ramsrecruit.repository.CandidateRepository;
import com.rams.ramsrecruit.repository.CandidateRepository2;
import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;
import jakarta.websocket.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

@Service
public class CandidateService {
    @Autowired
   private CandidateRepository candidateRepository;
   @Autowired
    private CandidateRepository2 candidateRepository2;



    /**
     * Returns all the candidate data stored in the database
     * @returns Candidate Data in array format
     */
     public Candidate[] getAll(){
        return candidateRepository.getall2();
    }

    public long getAllCandidatesCount() {
        return candidateRepository.count();
    }

    public Candidate addCandidate(Candidate cd) {
        return candidateRepository.save(cd);
    }
}
