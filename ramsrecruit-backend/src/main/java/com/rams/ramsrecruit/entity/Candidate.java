/**
 * https://github.com/senbagaraman04/rams-recruit
 */

package com.rams.ramsrecruit.entity;


import jakarta.persistence.*;
import lombok.*;


import java.io.Serializable;

@Data
@Entity
@Table(name="candidate")
public class Candidate implements Serializable {

    private static final long serialVersionUID = 1681261135191719508L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
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
