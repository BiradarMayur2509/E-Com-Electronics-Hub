package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Area;
import com.example.demo.entities.City;
import com.example.demo.entities.Role;
import com.example.demo.entities.Seller;
import com.example.demo.entities.SellerRegistration;
import com.example.demo.entities.User;
import com.example.demo.services.AreaService;
import com.example.demo.services.CityService;
import com.example.demo.services.RoleService;
import com.example.demo.services.SellerService;
import com.example.demo.services.UserService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class SellerController {

	@Autowired
	SellerService sservice;
	
	@Autowired
	RoleService rservice;
	
	@Autowired
	UserService uservice;
	
	@Autowired
	CityService cyservice;
	
	@Autowired
	AreaService aservice;
	
	@PostMapping("/sellerreg")
	public Seller saveSeller(@RequestBody SellerRegistration slr)
	{
		Role r = rservice.getRole(3);
		User u = new User(slr.getUsername(),slr.getPassword(),r,true);
		User saved = uservice.save(u);
		
		City cy = cyservice.getCity(slr.getC_id());
		Area a = new Area(slr.getArea_name(),slr.getPincode(),cy);
		Area asaved = aservice.save(a);
		Seller s = new Seller(slr.getGst_no(),slr.getLicense_id(),slr.getShop_name(),slr.getPhone_no(),slr.getEmail(),asaved,saved);
		System.out.println(s);

		return sservice.saveSeller(s);
		
	}
	

}


