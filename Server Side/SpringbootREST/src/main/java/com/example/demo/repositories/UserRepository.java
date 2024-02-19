package com.example.demo.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.User;



@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

	@Query("select u from User u where username= :uid and password= :pwd")	//HQL Query
	public Optional<User> getUser(String uid, String pwd);
	
	
	
}
