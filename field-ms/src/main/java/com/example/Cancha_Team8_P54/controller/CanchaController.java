package com.example.Cancha_Team8_P54.controller;



import exceptions.CanchaNotFoundException;
import lombok.AllArgsConstructor;
import com.example.Cancha_Team8_P54.model.Cancha;
import org.springframework.web.bind.annotation.*;
import com.example.Cancha_Team8_P54.services.CanchaService;
import com.example.Cancha_Team8_P54.repository.CanchaRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins= "*")
@RestController
@RequestMapping("/cancha")
@AllArgsConstructor

public class CanchaController {

    private final CanchaService canchaService;
    @GetMapping
    public List<Cancha> getAllCancha(){
        return canchaService.getAllCanchas();
    }

    @GetMapping("buscar_cancha")
    public List<Cancha> IndexCancha(){

        return canchaService.getAllCanchas();
    }

    @GetMapping("/buscar_cancha/{nombre}")
    public Cancha buscar_cancha(@PathVariable String nombre){
        return canchaService.findCanchaNombre(nombre);

    }

    @PostMapping("/crear_cancha")
    public Cancha crear_cancha(@RequestBody Cancha cancha){
       return canchaService.save(cancha);
    }

    @PostMapping("/eliminar_cancha/{nombre}")
    public Cancha eliminar_cancha(@PathVariable String nombre){
        return canchaService.deleteCancha(nombre);
    }

}
