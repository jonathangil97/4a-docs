package com.example.Cancha_Team8_P54.services;

import lombok.AllArgsConstructor;
import com.example.Cancha_Team8_P54.model.Cancha;
import org.springframework.stereotype.Service;
import com.example.Cancha_Team8_P54.repository.CanchaRepository;

import java.util.List;

@AllArgsConstructor
@Service

public class CanchaService {

    private final CanchaRepository canchaRepository;

    public List<Cancha> getAllCanchas(){
        return canchaRepository.findAll();
    }

    public Cancha save(Cancha cancha){

        return canchaRepository.insert(cancha);
    }

    public Cancha deleteCancha(String nombre){

        return canchaRepository.removeCanchaBynombre(nombre);
    }

    public Cancha findCanchaNombre(String nombre){

        return canchaRepository.findCanchaBynombre(nombre);
    }



}
