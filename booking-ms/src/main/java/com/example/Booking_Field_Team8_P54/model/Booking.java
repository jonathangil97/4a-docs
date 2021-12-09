package com.example.Booking_Field_Team8_P54.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;

import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
@Getter
@Setter

public class Booking {

        @Id
        private String id;
        @JsonFormat(pattern= "yyyy-MM-dd HH:mm:ss")
        private String fecha_hora;
        private String nombre_persona;
        private String cancha;
        private String username;
        private String tiempo_reserva;
        private String tipo_pago;
        private String arbitraje;
        private String hidratacion;
        private String uniformes;

    public Booking(String fecha_hora, String nombre_persona, String cancha, String username, String tiempo_reserva, String tipo_pago, String arbitraje, String hidratacion, String uniformes) {
        this.fecha_hora = fecha_hora;
        this.nombre_persona = nombre_persona;
        this.cancha = cancha;
        this.username = username;
        this.tiempo_reserva = tiempo_reserva;
        this.tipo_pago = tipo_pago;
        this.arbitraje = arbitraje;
        this.hidratacion = hidratacion;
        this.uniformes = uniformes;
    }
}


