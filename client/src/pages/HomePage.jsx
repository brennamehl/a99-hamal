import React, { useEffect, useState  } from 'react';
import './HomePage.css';
import RequestService from "../services/RequestService";

  function HomePage() {
   // const [message, setMessage] = useState("");
    //fetch array of country names 
  const fetchCountry = async () => {
    //const allCountriesData = [RequestService.getAllCountriesData()];
    await RequestService.getAllCountriesData().then((res) => {
       const data = res.data;
       //console.log(data);
    })
}

  useEffect(() => {
    fetchCountry()
}, [])
  return (
    <pre>
      <p>Countries!</p>
      <div>
        <h1>{}</h1>
    </div>
    </pre>
);
  }
  export default async (req, res) => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
    const countries = await HomePage();
    res.send(countries);
  }