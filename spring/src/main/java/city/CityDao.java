package city;

import city.City;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
@Service
public class CityDao {
    public static Set<City> citySet= new HashSet<City>();
    public static Map<Integer,String> cityDesc= new HashMap<>();

    static Integer cityId =0;
    public void addCity(City city){
        int id = ++cityId;
        city.setId(id);
        citySet.add(city);
        cityDesc.put(id,getDesc(city));
    }
    private String getDesc(City city){
        return city.getName()+" is very good city. situated in state: "+city.getState()+" and country:"+city.getCountry();
    }
}
