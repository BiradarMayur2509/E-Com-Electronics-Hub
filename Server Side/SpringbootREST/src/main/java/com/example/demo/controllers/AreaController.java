package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Area;
import com.example.demo.entities.SellerRegistration;
import com.example.demo.services.AreaService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class AreaController {

	@Autowired
    AreaService aservice;

    
//    public List<Area> getCities() {
//        return aservice.getAll();
	
	@GetMapping("/getAreas")
    public List<Area> getAreasByCityId(@RequestParam int cid) {
        return aservice.getArea1(cid);
    }
	
	
	@GetMapping("/getArea")
    public Area getArea(@RequestParam int aid) {
        return aservice.getArea(aid);
    }
	
}























