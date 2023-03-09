/**
 * https://github.com/senbagaraman04/rams-recruit
 */

package com.rams.ramsrecruit.controller;

import com.rams.ramsrecruit.entity.Interviewer;
import com.rams.ramsrecruit.entity.Login;
import com.rams.ramsrecruit.service.LoginService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/ramsapi")
@CrossOrigin(origins = "http://localhost:4200")
public class LoginController {

    @Autowired
    private LoginService loginService;


    @PostMapping(value="/login", consumes = {"application/json;charset=UTF-8"}, produces={"application/json;charset=UTF-8"})
    public ResponseEntity<String> authenticateLogin(@RequestBody Login lg){

       if(lg != null){
            Login requestedData = loginService.findUserLoginDetails(lg.getEmail());

            if(requestedData.getEmail().equals(lg.getEmail())){
                if(requestedData.getPassword().equals(lg.getPassword())){
                    return new ResponseEntity<String>(HttpStatus.OK);
                }
            }

        }

        return new ResponseEntity<String>(HttpStatus.NOT_FOUND);
    }

}
