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

   private EntityManager myEntityManager;

    /**
     * Returns all the candidate data stored in the database
     * @returns Candidate Data in list format
     */
    public Iterable<Candidate> getAllCandidates() {
        return candidateRepository.findAll();
    }

    public Candidate[] getAll(){

        //TODO: Static Response as the response is not coming

        return candidateRepository.getall2();
    }

    public long getAllCandidatesCount() {
        return candidateRepository.count();
    }

    public void addCandidate(Candidate cd) {
        candidateRepository.save(cd);
    }
}
