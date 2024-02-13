package com.example.demo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.User;
import com.example.demo.repositories.UserRepository;



@Service
public class UserService {

	@Autowired
	UserRepository urepo;
	
	public User getuser(String username, String password)
	{
		User u;
		Optional<User> ou= urepo.getUser(username, password);
		try 
		{
			u=ou.get();
		}
		catch(Exception e)
		{
			u=null;
		}
		return u;
	}
	
}
