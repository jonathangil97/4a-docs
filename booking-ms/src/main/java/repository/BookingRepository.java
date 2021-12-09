package repository;

import model.Booking;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BookingRepository extends MongoRepository <Booking, String> {

    Booking findBookingByemail(String email);
    Booking removeBookingByid(String id);

}
