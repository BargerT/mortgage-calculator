"use client"

export function EstimatedMonthly() {
    const P = document.getElementById("LoanAmountValue").value.replace(/\D/g, "");
    const r = (document.getElementById("InterestRate").value / 100) / 12;
    const n = document.getElementById("RepaymentTime").value * 12;

    return "$" + (P * ((r*((1+r) ** n)) / ((((1+r) ** n) - 1)))).toLocaleString(undefined, {maximumFractionDigits: 2});

}