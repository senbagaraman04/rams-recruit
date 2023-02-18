/**
 * https://github.com/senbagaraman04/rams-recruit
 */

package com.rams.ramsrecruit.controller;

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


    @GetMapping("/login")
    public ResponseEntity<Boolean> authenticateLogin(@RequestBody Login lg){
        return new ResponseEntity<Boolean>(HttpStatus.OK);
    }

}
