package city;

import city.City;

import java.util.Set;

public interface CityService {
    public void addCity(City city);
    public Set<City> getCities();
    public String getCityDetail(Integer cityId);
}
