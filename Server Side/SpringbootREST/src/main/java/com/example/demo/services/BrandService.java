package com.example.demo.services;

import com.example.demo.entities.Brand;
import com.example.demo.repositories.BrandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
//public Brand addBrand(Brand brand) {
//return brandRepository.save(brand);
//}
//
//public Brand updateBrand(Brand brand) {
//return brandRepository.save(brand);
//}
//
//public void deleteBrand(Integer id) {
//brandRepository.deleteById(id);
//}



@Service
public class BrandService {

    @Autowired
    private BrandRepository brandRepository;

    public List<Brand> getAllBrands() {
        return brandRepository.findAll();
    }

    public Brand getBrandById(Integer id) {
        return brandRepository.findById(id).orElse(null);
    }

}