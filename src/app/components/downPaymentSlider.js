"use client"
import "../styles/slider.css";
import {useEffect} from "react";

export default function DownPaymentSlider (){

    useEffect(() => {
        const output = document.getElementById("DownPaymentValue");
        const input = document.getElementById("DownPayment");

        output.innerHTML = "$" + Number(input.value).toLocaleString();

        input.addEventListener('input', function () {
            output.innerHTML = "$" + Number(input.value).toLocaleString();
        }, false);
    })

    return(
        <div>
            <label htmlFor="DownPayment">Down Payment: <output id="DownPaymentValue"/></label>
            <input
                type = "range"
                id = "DownPayment"
                name = "Down Payment"
                min = {0}
                max = {1000000}
                step = {10000}
            />
        </div>
    );
}