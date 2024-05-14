'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LocationDisplay = () => {
  const [city, setCity] = useState(null);

  useEffect(() => {
    const getLocation = async () => {
      try {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            const apikey = '1cUpOJgSV9g2hZU3wEAwufl2IUqfaeO0OC9qkoG-Ol4';
            try {
              const response = await axios.get(
                `https://revgeocode.search.hereapi.com/v1/revgeocode?at=${latitude},${longitude}&apiKey=${apikey}`,
              );
              const addressComponents = response.data.items[0].address;
              const cityName = addressComponents.city;
              const countryName = addressComponents.countryName;
              setCity(cityName);
              setCountry(countryName);
            } catch (error) {
              console.error('Error fetching location:', error);
            }
          });
        } else {
          alert('Geolocation is not supported by this browser.');
        }
      } catch (error) {
        console.error('Error getting current position:', error);
      }
    };

    getLocation();
  }, []);

  if (city) {
    return <span>Near: {city}</span>;
  } else {
    return <span>Loading...</span>;
  }
};

export default LocationDisplay;
