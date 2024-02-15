package com.example.demo.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Area;
import com.example.demo.entities.City;
import com.example.demo.entities.Consumer;
import com.example.demo.entities.ConsumerRegistration;
import com.example.demo.entities.Role;
import com.example.demo.entities.User;
import com.example.demo.services.AreaService;
import com.example.demo.services.CityService;
import com.example.demo.services.ConsumerService;
import com.example.demo.services.RoleService;
import com.example.demo.services.UserService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class ConsumerController {



	@Autowired
	ConsumerService cservice;
	
	@Autowired
	RoleService rservice;
	
	@Autowired
	UserService uservice;
	
	@Autowired
	CityService cyservice;
	
	@Autowired
	AreaService aservice;
	
	@PostMapping("/consumerreg")		//******************************************************
	public Consumer saveConsumer(@RequestBody ConsumerRegistration cnsmr)
	{
		Role r = rservice.getRole(2);
		User u = new User(cnsmr.getUsername(),cnsmr.getPassword(),r,true);
		User saved = uservice.save(u);
		
		City cy = cyservice.getCity(cnsmr.getC_id());
		Area a = new Area(cnsmr.getArea_name(),cnsmr.getPincode(),cy);
		Area asaved = aservice.save(a);
		Consumer c = new Consumer(cnsmr.getFirst_name(),cnsmr.getLast_name(),cnsmr.getPhone_no(),cnsmr.getEmail(),saved,asaved);
		System.out.println(c);

		return cservice.saveConsumer(c);
		
	}
	
}


