"use client"
import "../styles/slider.css";
import {useEffect} from "react";

export default function InterestRateSlider (){

    useEffect(() => {
        const output = document.getElementById("InterestRateValue");
        const input = document.getElementById("InterestRate");
        output.innerHTML = input.value;

        input.addEventListener('input', function () {
            output.innerHTML = input.value;
        }, false);
    })

    return(
        <div>
            <label htmlFor="InterestRate">Interest Rate: <output id="InterestRateValue"/>%</label>
            <input
                type = "range"
                id = "InterestRate"
                name = "Interest Rate"
                min = {0}
                max = {10}
                step = {0.5}
            />
        </div>
    );
}