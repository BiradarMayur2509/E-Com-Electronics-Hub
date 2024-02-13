package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.User;
import com.example.demo.entities.UserCheck;
import com.example.demo.services.UserService;



@CrossOrigin(origins="http://localhost/3000")
@RestController
public class UserController {

	@Autowired
	UserService uservice;

	@PostMapping("/checkUser")
	public User checkUser(@RequestBody UserCheck ucheck)
	{
		return uservice.getuser(ucheck.getUsername(), ucheck.getPassword());
		
		
		
	}
}