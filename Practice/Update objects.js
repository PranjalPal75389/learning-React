import React, { useState } from 'react';

function App() {
    const [car, setCar] = useState({
        year: 2023,
        brand: "Tata",
        model: "Cruser"
    });
    

    function updateYear(event) {
        setCar({ ...car, year: event.target.value });
    }

    function updateBrand(event) {
        setCar({ ...car, brand: event.target.value });
    }

    function updateModel(event) {
        setCar({ ...car, model: event.target.value });
    }

    return (
        <div className="App">
            <h2>Your Current Car</h2>
            <p>Car Year: {car.year}</p>
            <p>Car Brand: {car.brand}</p>
            <p>Car Model: {car.model}</p>
            <br /><br />
            <h2>What Car You Want</h2>
            Year:
            <input value={car.year} onChange={updateYear} /><br /><br />
            Brand:
            <input value={car.brand} onChange={updateBrand} /><br /><br />
            Model:
            <input value={car.model} onChange={updateModel} /><br />
        </div>
    );
}

export default App;
