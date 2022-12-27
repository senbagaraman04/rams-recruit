package com.rams.ramsrecruit.controller;

import com.rams.ramsrecruit.entity.Candidate;
import com.rams.ramsrecruit.service.CandidateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Collection;
import java.util.List;

@Controller
@RequestMapping("/ramsapi")
@CrossOrigin(origins = "http://localhost:4200")
public class CandidateController {

    @Autowired
    private CandidateService candidateService;

    @RequestMapping( "/getallcandidates" )
    public ResponseEntity<String> getStockItem() {
        return new ResponseEntity<String>(candidateService.getAllCandidates().toString(), HttpStatus.OK);
    }


    @GetMapping("/getallcount")
    public  ResponseEntity<Long>  getAllCandidatesCount() {
        return new ResponseEntity<Long>(Long.valueOf(String.valueOf(candidateService.getAllCandidatesCount())), HttpStatus.OK);
    }
}
