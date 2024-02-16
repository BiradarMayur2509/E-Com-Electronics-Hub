package com.example.demo.controllers;

import com.example.demo.entities.City;
import com.example.demo.services.CityService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class CityController {

	@Autowired
    CityService cservice;

    @GetMapping("/getCities")
    public List<City> getCities() {
              return cservice.getAll();
    }
}
