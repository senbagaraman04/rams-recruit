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

@Controller
@RequestMapping("/ramsapi")
@CrossOrigin(origins = "http://localhost:4200")
public class CandidateController {

    @Autowired
    private CandidateService candidateService;

    @RequestMapping( "/getallcandidates" )
    public ResponseEntity<Candidate[]> getCandidateData() {

        return new ResponseEntity<Candidate[]>(candidateService.getAll(), HttpStatus.OK);
    }



    @GetMapping("/getCandidatebyId")
    public ResponseEntity<Candidate> getCadidatebyID(@RequestParam() Integer id){
        return new ResponseEntity<Candidate>(candidateService.getCandidatebyId(id), HttpStatus.OK);
    }



    @GetMapping("/getallcount")
    public  ResponseEntity<Long>  getAllCandidatesCount() {
        return new ResponseEntity<Long>(Long.valueOf(String.valueOf(candidateService.getAllCandidatesCount())), HttpStatus.OK);
    }

    @PostMapping(value="/addCandidates", consumes = {"application/json;charset=UTF-8"}, produces={"application/json;charset=UTF-8"})
    public ResponseEntity<String> addCandidate(@RequestBody Candidate cd){
        System.out.println(cd);
        if(cd != null){
            candidateService.addCandidate(cd);

            return new ResponseEntity<String>("", HttpStatus.OK);
        }else{
            return new ResponseEntity<String>("", HttpStatus.NOT_MODIFIED);
        }

    }


    @PatchMapping(value="/addCandidates2", consumes = {"application/json;charset=UTF-8"}, produces={"application/json;charset=UTF-8"})
    public ResponseEntity<String> patchCandidate(@RequestBody Candidate cd){
        System.out.println(cd);
        if(cd != null){
            candidateService.addCandidate(cd);

            return new ResponseEntity<String>("", HttpStatus.OK);
        }else{
            return new ResponseEntity<String>("", HttpStatus.NOT_MODIFIED);
        }

    }
}
