package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Consumer;

@Repository
public interface ConsumerRepository extends JpaRepository<Consumer, Integer> {

}
