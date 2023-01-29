/**
 * https://github.com/senbagaraman04/rams-recruit
 */
package com.rams.ramsrecruit.service;

import com.rams.ramsrecruit.entity.Candidate;
import com.rams.ramsrecruit.repository.CandidateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CandidateService {
    @Autowired
   private CandidateRepository candidateRepository;
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

    public Candidate getCandidatebyId(Integer id) {
         return candidateRepository.findById(id).orElse(null);
    }
}
