package services;


import lombok.AllArgsConstructor;
import model.Booking;
import org.springframework.stereotype.Service;
import repository.BookingRepository;

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

    public Booking findBookingByEmail(String email){
        return bookingRepository.findBookingByemail(email);

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
