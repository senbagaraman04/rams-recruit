package com.rams.ramsrecruit.controller;

import com.rams.ramsrecruit.entity.Candidate;
import com.rams.ramsrecruit.service.CandidateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Collection;
import java.util.List;

@Controller
@RequestMapping("/ramsapi")
public class CandidateController {

    @Autowired
    private CandidateService candidateService;

    @GetMapping("/getallcandidates")
    public List<Candidate> getAllCandidates() {
        return candidateService.getAllCandidates();
    }


    @GetMapping("/getallcandidatescount")
    public long getAllCandidatesCount() {
        return candidateService.getAllCandidatesCount();
    }
}
