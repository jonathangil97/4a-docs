package com.example.Cancha_Team8_P54.repository;

import com.example.Cancha_Team8_P54.model.Cancha;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CanchaRepository extends MongoRepository <Cancha, String> {

    Cancha findCanchaBynombre(String nombre);
    Cancha removeCanchaBynombre(String nombre);
}
