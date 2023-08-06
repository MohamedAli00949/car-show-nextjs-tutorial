const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";

export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "efae4b4465msh495d69cedd0c453p1a65f0jsn2ec2f52d787d",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  }

  const response = await fetch(url, {
    headers: headers,
  });

  const result = await response.json();

  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50;

  const mileageFactor = 0.1;

  const ageFactor = 0.05;

  const milageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + milageRate * ageRate;

  return rentalRatePerDay.toFixed(0);
}

