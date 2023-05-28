import Image from 'next/image';
import React, { useState } from 'react';

const Slider = () => {
    const [value, setValue] = useState(0);
    const [price, setPrice] = useState(0);

    const handleChange = (event) => {
        const newValue = parseInt(event.target.value);
        setValue(newValue);

        let newPrice;
        if (newValue < 1000) {
            newPrice = (newValue * (8.4 / 250)).toFixed(2);
        } else if (newValue >= 1000 && newValue < 5000) {
            newPrice = (newValue * (8.3 / 250)).toFixed(2);
        } else if (newValue >= 5000 && newValue < 10000) {
            newPrice = (newValue * (8.2 / 250)).toFixed(2);
        } else if (newValue >= 10000) {
            newPrice = (newValue * (8.1 / 250)).toFixed(2);
        } else {
            newPrice = 0;
        }

        setPrice(newPrice);
    };

    return (
        <div className="text-2xl font-bold mb-6 text-center">
            <h1 className="text-2xl font-bold mb-6 text-center">RuneCoins</h1>
            <div className="flex justify-center items-center">
                <Image src="/runecoin.png" alt="runecoin" width={200} height={150}/>
                <Image src="/tibiacoins.png" alt="runecoin" width={150} height={150}/>
            </div>
            <div className="w-2/4 mx-auto">
                <input
                    type="range"
                    min={0}
                    max={25000}
                    step={250}
                    value={value}
                    onChange={handleChange}
                    className="w-2/3 h-4"
                />
            </div>
            <p>Tibia Coins: {value}</p>
            <p>Precio: € {price}</p>
        </div>
    );
};

export default Slider;