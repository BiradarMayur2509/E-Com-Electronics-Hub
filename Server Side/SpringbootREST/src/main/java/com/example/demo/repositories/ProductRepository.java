package com.example.demo.repositories;

import com.example.demo.entities.Brand;
import com.example.demo.entities.Category;
import com.example.demo.entities.Model;
import com.example.demo.entities.Product;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
 	@Query("Select p, m from Product p, Model m  where p.model = m.model_Id")
 	public List<Product> getProductsByModel();
}