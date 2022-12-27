/**
 * https://github.com/senbagaraman04/rams-recruit
 */

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
    @Column(name="Id")
    private int id;
    @Column(name="name")
    String name;
    @Column(name="experience")
    String experience;
    @Column(name="techStack")
    String[] techStack;
    @Column(name="email")
    String  email;
    @Column(name="phoneNumber")
    String phoneNumber;
    @Column(name="gender")
    String gender;
}
