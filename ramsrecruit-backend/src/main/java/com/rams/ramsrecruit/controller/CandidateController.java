package com.rams.ramsrecruit.controller;

import com.rams.ramsrecruit.models.Candidate;
import com.rams.ramsrecruit.repository.CandidateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/ramsapi")
public class CandidateController {


    @GetMapping("/allcandidates")
    public List<Candidate> getAllCandidates() {

        Candidate cde = new Candidate();
        cde.setEmail("test@test.com");
        cde.setExperience("3");
        cde.setGender("Male");
        cde.setName("Test Candidate 1");
        cde.setPhoneNumber("9000000000");
        String[] tech = new String[4];
        tech[0] = "net";
        tech[1] = "java";
        tech[2] = "Azure";
        tech[3] = "Spring";
        cde.setTechStack(tech);


        Candidate cde2 = new Candidate();
        cde2.setEmail("test2@test.com");
        cde2.setExperience("13");
        cde2.setGender("Female");
        cde2.setName("Test Candidate 2");
        cde2.setPhoneNumber("9000000000");
        String[] tech2 = new String[4];
        tech2[0] = "net";
        tech2[1] = "java";
        tech2[2] = "SQL Server";
        tech2[3] = "Spring";
        cde2.setTechStack(tech2);

        List<Candidate> candidateList = new ArrayList<>() ;
        candidateList.add(cde);
        candidateList.add(cde2);
        return candidateList;
    }
}
