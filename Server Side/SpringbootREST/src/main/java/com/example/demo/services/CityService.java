package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.City;
import com.example.demo.repositories.CityRepository;

@Service
public class CityService {
	
	@Autowired
	CityRepository cyrepo;
	
	public City getCity(int city_id)
	{
		
		return cyrepo.findById(city_id).get();
	}
	

}
