package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Seller;
import com.example.demo.repositories.SellerRepository;

@Service
public class SellerService {

	@Autowired
	SellerRepository srepo;
	
	public Seller saveSeller(Seller seller)
	{
		return srepo.save(seller);
		
	}
	
}
