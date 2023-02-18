package com.rams.ramsrecruit.entity;


import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Data
@Entity
@Table(name="login")
public class Login implements Serializable {

    private static final long serialVersionUID = 1681261135191719508L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;
    @Column(name="password")
    String password;
    @Column(name="email")
    String  email;


}