package com.example.Booking_Field_Team8_P54.services;


import lombok.AllArgsConstructor;
import com.example.Booking_Field_Team8_P54.model.Booking;
import org.springframework.stereotype.Service;
import com.example.Booking_Field_Team8_P54.repository.BookingRepository;

import java.util.List;

@AllArgsConstructor
@Service

public class BookingService {

    private final BookingRepository bookingRepository;

    //Funcion para obtener todas las reservas

    public List<Booking> getallBooking(){
        return bookingRepository.findAll();
    }

    //Funcion para obtener las reservas mediante email

    public Booking findBookingByUsername(String username){
        return bookingRepository.findBookingByusername(username);

    }

    //Funcion para crear reservas

    public Booking save(Booking booking){
        return bookingRepository.insert(booking);
    }

    //Funcion para borrar reservas

    public Booking deleteBooking(String id){
        return bookingRepository.removeBookingByid(id);
    }


}
