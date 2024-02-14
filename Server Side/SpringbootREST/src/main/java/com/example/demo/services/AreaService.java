package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Area;
import com.example.demo.repositories.AreaRepository;

@Service
public class AreaService {
	
	@Autowired
	AreaRepository arepo;
	
	public Area save(Area a)
	{
		return arepo.save(a);
	}

}
