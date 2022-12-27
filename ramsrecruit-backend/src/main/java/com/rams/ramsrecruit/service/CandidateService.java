/**
 * https://github.com/senbagaraman04/rams-recruit
 */
package com.rams.ramsrecruit.service;

import com.rams.ramsrecruit.entity.Candidate;
import com.rams.ramsrecruit.repository.CandidateRepository;
import com.rams.ramsrecruit.repository.CandidateRepository2;
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
     * @returns Candidate Data in list format
     */
    public Iterable<Candidate> getAllCandidates() {
        return candidateRepository.findAll();
    }

    public List<Candidate> getAll(){
        System.out.println("From Service");
        List<Candidate> rows = candidateRepository2.getall2();
        System.out.println(rows);
        System.out.println(rows.get(0));

        System.out.println("From Service3");
        List row2s = candidateRepository2.getall2();
        System.out.println(row2s);
        System.out.println(row2s.get(0));
        return rows;
    }

    public long getAllCandidatesCount() {
        return candidateRepository.count();
    }

    public void addCandidate(Candidate cd) {
        candidateRepository.save(cd);
    }
}
