"use client"
import "../styles/button.css";
import {useEffect} from "react";
import {LoanAmount} from './loanAmount';
import {EstimatedMonthly} from './estimatedMonthly'

export default function CalculateEstimateButton (){

    useEffect(() => {
        const input = document.getElementById("quoteGenerator");
        const loanAmount = document.getElementById("LoanAmountValue");
        const estimatedMonthly = document.getElementById("EstimatedMonthly");

        loanAmount.innerHTML = "$0";
        estimatedMonthly.innerHTML = "$0";

        input.addEventListener('click', function () {
            loanAmount.innerHTML = LoanAmount();
            estimatedMonthly.innerHTML = EstimatedMonthly();
        }, false);
    })

    return(
        <div>
            <input
                type = "button"
                id = "quoteGenerator"
                value = "Get a mortgage quote"
            />
        </div>
    );
}