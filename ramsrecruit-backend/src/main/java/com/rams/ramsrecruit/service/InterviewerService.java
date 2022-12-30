package com.rams.ramsrecruit.service;

import com.rams.ramsrecruit.entity.Interviewer;
import com.rams.ramsrecruit.repository.InterviewerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InterviewerService {
    @Autowired
    private InterviewerRepository intrvRepo;

    public Interviewer[] getAllInterviewer(){
        return intrvRepo.getallInterviewer();
    }

    public Interviewer saveInterviewerData(Interviewer intr) {
        return intrvRepo.save(intr);
    }
}
