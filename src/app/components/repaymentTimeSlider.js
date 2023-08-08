"use client"
import "../styles/slider.css";
import {useEffect} from "react";

export default function RepaymentTimeSlider (){

    useEffect(() => {
        const output = document.getElementById("RepaymentTimeValue");
        const input = document.getElementById("RepaymentTime");
        output.innerHTML = input.value;

        input.addEventListener('input', function () {
            output.innerHTML = input.value;
        }, false);
    })

    return(
        <div>
            <label htmlFor="RepaymentTime">Repayment Time: <output id="RepaymentTimeValue"/> years</label>
            <input
                type = "range"
                id = "RepaymentTime"
                name = "Repayment Time"
                min = {1}
                max = {30}
                step = {1}
            />
        </div>
    );
}