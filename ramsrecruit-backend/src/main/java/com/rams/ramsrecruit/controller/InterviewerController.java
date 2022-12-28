/**
 * https://github.com/senbagaraman04/rams-recruit
 */

package com.rams.ramsrecruit.controller;

import com.rams.ramsrecruit.entity.Candidate;
import com.rams.ramsrecruit.entity.Interviewer;
import com.rams.ramsrecruit.service.InterviewerService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;






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
public class InterviewerController {

    @Autowired
    private InterviewerService intrService;

    @GetMapping("/getAllInterviewer")
    public Interviewer[] getAllInterviewer() {
        return intrService.getAllInterviewer();
    }

    @PostMapping(value="/addInterviewer", consumes = {"application/json;charset=UTF-8"}, produces={"application/json;charset=UTF-8"})
    public ResponseEntity<String> addCandidate(@RequestBody Interviewer cd){
        if(cd != null){
            intrService.saveInterviewerData(cd);
            return new ResponseEntity<String>("Interviewer Added Successfully", HttpStatus.OK);
        }else{
            return new ResponseEntity<String>("Interviewer Not Added", HttpStatus.NOT_MODIFIED);
        }

    }
}
