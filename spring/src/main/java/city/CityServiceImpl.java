package city;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import city.CityDao;

import java.util.Set;
@Service
public class CityServiceImpl implements CityService {
    @Autowired
    private CityDao cityDao;
    public void addCity(City city) {
        cityDao.addCity(city);
    }

    public String getCityDetail(Integer cityId){
        return CityDao.cityDesc.get(cityId);
    }

    public Set<City> getCities() {
        return CityDao.citySet;
    }
}
