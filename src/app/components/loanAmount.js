"use client"

export function LoanAmount() {

    const purchasePrice = document.getElementById("PurchasePrice").value.replace(/\D/g, "");
    const downPayment = document.getElementById("DownPayment").value.replace(/\D/g, "");
    const loanAmount = purchasePrice- downPayment; 

    if(loanAmount < 0) {
        return "Down Payment is too large";
    }

    return "$" + loanAmount.toLocaleString();

}