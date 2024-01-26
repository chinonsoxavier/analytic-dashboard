const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3be98756camsh4b7870c6db8c360p1a2974jsnf4ff39b6edfe",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}


export async function FetchCars(){
    const headers= {
    "X-RapidAPI-Key": "3be98756camsh4b7870c6db8c360p1a2974jsnf4ff39b6edfe",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  }

  const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";

  const res = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",{
        headers:headers
    }
  );

  const result = await Response.json();

  return result;
}