package city;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@Controller
public class CityController {
    @Autowired
    private CityService cityService;

     @GetMapping("/city")
     public ResponseEntity<Set<City>> getCities(){
         return new ResponseEntity<Set<City>>(cityService.getCities(), HttpStatus.OK);
     }

    @PostMapping("/city")
    public ResponseEntity<Set<City>> addCity(@RequestBody City city){
        cityService.addCity(city);
       return new ResponseEntity<Set<City>>(cityService.getCities(), HttpStatus.OK);
    }

    @GetMapping("/city/{id}")
    public ResponseEntity<String> getCityDesc(@PathVariable("id") Integer id){
        return new ResponseEntity<String>(cityService.getCityDetail(id), HttpStatus.OK);
    }

}
