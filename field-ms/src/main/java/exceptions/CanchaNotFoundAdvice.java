package exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;



@ControllerAdvice
@ResponseBody

public class CanchaNotFoundAdvice {

    @ResponseBody
    @ExceptionHandler(CanchaNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String EntityNotFoundAdvice(CanchaNotFoundException ex){
        return ex.getMessage();
    }

}
