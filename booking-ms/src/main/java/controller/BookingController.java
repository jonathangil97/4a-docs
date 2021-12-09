package controller;


import lombok.AllArgsConstructor;
import model.Booking;
import org.springframework.web.bind.annotation.*;
import services.BookingService;
import java.util.List;

@CrossOrigin(origins= "*")
@RestController
@RequestMapping("/reserva")
@AllArgsConstructor

public class BookingController {

    private final BookingService bookingService;
    @GetMapping
    public List<Booking> getAllBooking(){
        return bookingService.getallBooking();
    }

    @GetMapping("/buscar_reserva/{email}")
    public Booking buscar_cancha_email(@PathVariable String email){
        return bookingService.findBookingByEmail(email);
    }

    @PostMapping("/crear_reserva")
        public Booking crear_reserva(@RequestBody Booking booking){
        return bookingService.save(booking);
    }

    @PostMapping("/borrar_reserva/{id}")
    public Booking crear_reserva(@RequestBody String id){
        return bookingService.deleteBooking(id);
    }

}
