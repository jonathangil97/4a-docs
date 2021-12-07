package com.example.Cancha_Team8_P54.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
@Getter
@Setter
public class Cancha {

    @Id
    private String id;
    private String nombre;
    @Indexed(unique=true)
    private String direccion;
    private String ubicacion;
    private String cantidad_jugadores;
    private String propietario;
    private String precio;

    public Cancha(String nombre, String direccion, String ubicacion, String cantidad_jugadores, String propietario, String precio) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.ubicacion = ubicacion;
        this.cantidad_jugadores = cantidad_jugadores;
        this.propietario = propietario;
        this.precio = precio;
    }

}


