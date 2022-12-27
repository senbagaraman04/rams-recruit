package com.rams.ramsrecruit.service;

import com.rams.ramsrecruit.entity.Candidate;
import com.rams.ramsrecruit.repository.CandidateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CandidateService {
    @Autowired
   private CandidateRepository candidateRepository;

    /**
     * Returns all the candidate data stored in the database
     * @returns Candidate Data in list format
     */
    public Iterable<Candidate> getAllCandidates() {
        return candidateRepository.findAll();
    }

    public long getAllCandidatesCount() {
        return candidateRepository.count();
    }

}
