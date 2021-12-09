package com.example.Booking_Field_Team8_P54.repository;

import com.example.Booking_Field_Team8_P54.model.Booking;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BookingRepository extends MongoRepository <Booking, String> {

    Booking findBookingByusername (String username);
    Booking removeBookingByid(String id);

}
