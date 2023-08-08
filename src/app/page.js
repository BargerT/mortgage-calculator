import PurchasePriceSlider from './components/purchasePriceSlider.js'
import DownPaymentSlider from './components/downPaymentSlider.js'
import RepaymentTimeSlider from './components/repaymentTimeSlider.js'
import InterestRateSlider from './components/interestRateSlider.js'
import CalculateEstimateButton from './components/calculateEstimateButton.js'

export default function Home() {
  return (
    <div className="bigContainer" >
      <h1>Mortgage Calculator</h1>

      <div class="flex-container" className="topRow">

        <div className = "item">
          <PurchasePriceSlider/>
        </div>

        <div className = "item">
          <DownPaymentSlider/>
        </div>

        <div className = "item">
          <RepaymentTimeSlider/>
        </div>
      </div>

      <div class="flex-container" className="bottomRow">

        <div className="item">
          <InterestRateSlider/>
        </div>

        <div className="numberItem">
          <h1>Loan Amount</h1>
          <output style={{fontSize: 30}} id="LoanAmountValue"/>
        </div>

        <div className="numberItem">
          <h1>Estimated per Month</h1>
          <output style={{fontSize: 30}} id="EstimatedMonthly"/>
        </div>
      </div>

      <div className="buttonContainer">
        <CalculateEstimateButton/>
      </div>
    </div>
  );
}