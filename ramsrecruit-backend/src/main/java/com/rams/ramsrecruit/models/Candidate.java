package com.rams.ramsrecruit.models;

public class Candidate {

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getExperience() {
        return experience;
    }

    public void setExperience(String experience) {
        this.experience = experience;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String[] getTechStack() {
        return techStack;
    }

    public void setTechStack(String[] techStack) {
        this.techStack = techStack;
    }

    String name;

    String gender;

    String experience;

    String phoneNumber;

    String email;

    String[] techStack;
    
}
