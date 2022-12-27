/**
 * https://github.com/senbagaraman04/rams-recruit
 */

package com.rams.ramsrecruit.controller;

import com.rams.ramsrecruit.entity.Candidate;
import com.rams.ramsrecruit.service.CandidateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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
        System.out.println("***********");
        System.out.println(candidateService.getAll());
        return new ResponseEntity<String>(candidateService.getAll().toString(), HttpStatus.OK);
    }


    @GetMapping("/getallcount")
    public  ResponseEntity<Long>  getAllCandidatesCount() {
        return new ResponseEntity<Long>(Long.valueOf(String.valueOf(candidateService.getAllCandidatesCount())), HttpStatus.OK);
    }

    @PostMapping("/addCandidates")
    public ResponseEntity<String> addCandidate(@RequestBody Candidate cd){
        if(cd != null){
            candidateService.addCandidate(cd);
            return new ResponseEntity<String>("Candidate Added Successfully", HttpStatus.OK);
        }else{
            return new ResponseEntity<String>("Candidate Not Added", HttpStatus.NOT_MODIFIED);
        }

    }
}
