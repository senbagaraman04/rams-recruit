package com.rams.ramsrecruit.repository;

import com.rams.ramsrecruit.entity.Login;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LoginRepository extends JpaRepository<Login, Integer> {

    @Query(value = "select s from login where s.email=?1",nativeQuery = true)
    Login findLoginDetails(String email);


}
