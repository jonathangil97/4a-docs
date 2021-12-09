package com.example.Booking_Field_Team8_P54.controller;


import lombok.AllArgsConstructor;
import com.example.Booking_Field_Team8_P54.model.Booking;
import org.springframework.web.bind.annotation.*;
import com.example.Booking_Field_Team8_P54.services.BookingService;
import java.util.List;

@CrossOrigin(origins= "*")
@RestController
@RequestMapping("/booking")
@AllArgsConstructor

public class BookingController {

    private final BookingService bookingService;
    @GetMapping
    public List<Booking> getAllBooking(){
        return bookingService.getallBooking();
    }

    @GetMapping("buscar_reserva")
    public List<Booking> IndexBooking(){

        return bookingService.getallBooking();
    }

    @GetMapping("/buscar_reserva/{username}")
    public Booking buscar_cancha_email(@PathVariable String username){
        return bookingService.findBookingByUsername(username);
    }

    @PostMapping("/crear_reserva")
        public Booking crear_reserva(@RequestBody Booking booking){
        return bookingService.save(booking);
    }

    @PostMapping("/borrar_reserva/{id}")
    public Booking borrar_reserva(@PathVariable String id){
        return bookingService.deleteBooking(id);
    }

}
