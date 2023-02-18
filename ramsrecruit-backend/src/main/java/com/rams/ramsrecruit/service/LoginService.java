package com.rams.ramsrecruit.service;

import com.rams.ramsrecruit.entity.Interviewer;
import com.rams.ramsrecruit.entity.Login;
import com.rams.ramsrecruit.repository.InterviewerRepository;
import com.rams.ramsrecruit.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    @Autowired
    private LoginRepository loginRepo;

    public Login findUserLoginDetails(String email) {
        return loginRepo.findLoginDetails(email);
    }


}
