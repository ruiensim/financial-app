import {calculateInvestmentResults,formatter} from '../util/investment.js'

export default function Display({data}){
    const displayValue = calculateInvestmentResults(data);
    const initialInvestment = displayValue[0].valueEndOfYear - displayValue[0].interest - displayValue[0].annualInvestment;

    return(
        <table id = "result">
        <thead>
            <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
          {displayValue.map((value)=>
          {
             const totalinterest = value.valueEndOfYear - value.year * value.annualInvestment - initialInvestment;
             const totalCapitalInvest = value.valueEndOfYear - totalinterest;

             return(
                <tr key={value.year}>
                    <td>{value.year}</td>
                    <td>{formatter.format(value.valueEndOfYear)}</td>
                    <td>{formatter.format(value.interest)}</td>
                    <td>{formatter.format(totalinterest)}</td>
                    <td>{formatter.format(totalCapitalInvest)}</td>

                </tr>


             );


          }
         )}
        </tbody>
        </table>

    )
}