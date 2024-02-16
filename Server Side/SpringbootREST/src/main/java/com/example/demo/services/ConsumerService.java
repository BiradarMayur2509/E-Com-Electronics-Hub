package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Consumer;
import com.example.demo.repositories.ConsumerRepository;

@Service
public class ConsumerService {

	@Autowired
	ConsumerRepository crepo;
	
	public Consumer saveConsumer(Consumer consumer)
	{
		return crepo.save(consumer);
		
	}
}
