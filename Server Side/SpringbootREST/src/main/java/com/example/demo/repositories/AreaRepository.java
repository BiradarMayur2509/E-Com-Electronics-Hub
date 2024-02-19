package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Area;
import com.example.demo.entities.City;

@Repository
public interface AreaRepository extends JpaRepository<Area, Integer> {
	//public List<Area> findByCityId(int cityId);
	
 	@Query("Select a  from Area a where a.city = :city")
 	public List<Area> getAreas(City city);
}
    