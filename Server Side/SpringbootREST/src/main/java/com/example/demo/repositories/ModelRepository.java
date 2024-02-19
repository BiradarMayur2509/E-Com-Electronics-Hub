package com.example.demo.repositories;

import com.example.demo.entities.Area;
import com.example.demo.entities.Brand;
import com.example.demo.entities.Category;
import com.example.demo.entities.City;
import com.example.demo.entities.Model;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ModelRepository extends JpaRepository<Model, Integer> {
 	@Query("Select m  from Model m where m.category = :category and m.brand = :brand")
 	public List<Model> getModelsByCategoryAndBrand(Category category, Brand brand);
}