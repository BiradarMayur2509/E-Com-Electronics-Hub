package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.entities.Area;
import com.example.demo.entities.City;
import com.example.demo.entities.SellerRegistration;
import com.example.demo.repositories.AreaRepository;
import com.example.demo.repositories.CityRepository;

@Service
public class AreaService {
	
	@Autowired
	AreaRepository arepo;
	
	@Autowired
	CityRepository crepo;
	
	public List<Area> save(List<Area> a)
	{
		return arepo.saveAll(a);
	}

	public List<Area> getArea1(int cid)
	{
		City c = crepo.findById(cid).get();
     	return arepo.getAreas(c);
		//return arepo.findById(area_id).orElse(null);
		
	}
	
	public Area getArea(int aid)
	{
		return arepo.findById(aid).get();
	}
//	public List<Area> getAreasByCityId(int city_id) {
//        return arepo.findByCityId(city_id);
//	
//	}
}