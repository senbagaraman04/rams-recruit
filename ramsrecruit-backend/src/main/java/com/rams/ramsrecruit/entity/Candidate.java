package com.rams.ramsrecruit.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
@Entity
@Table(name="candidate")
@Getter
@Setter
public class Candidate {

    private static final long serialVersionUID = 1681261135191719508L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    String name;
    String experience;
    String[] techStack;
    String  email;
    String phoneNumber;
}
