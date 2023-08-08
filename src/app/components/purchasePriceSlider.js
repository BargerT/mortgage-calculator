"use client"
import "../styles/slider.css";
import {useEffect} from "react";

export default function PurchasePriceSlider (){

    useEffect(() => {
        const output = document.getElementById("PurchasePriceValue");
        const input = document.getElementById("PurchasePrice");

        output.innerHTML = "$" + Number(input.value).toLocaleString();

        input.addEventListener('input', function () {
            output.innerHTML = "$" + Number(input.value).toLocaleString()
        }, false);
    })

    return(
        <div>
            <label htmlFor="PurchasePrice">Purchase Price: <output id="PurchasePriceValue"/></label>
            <input
                type = "range"
                id = "PurchasePrice"
                name = "Purchase Price"
                min = {0}
                max = {1000000}
                step = {10000}
            />
        </div>
    );
}