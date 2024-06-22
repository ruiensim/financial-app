export default function Input({data,handleChange}){
    return(
        <section id="user-input">
        <div class="input-group">
        <p>
            <label for="initial-investment">Initial Investment</label>
            <input type="number" value={data.initialInvestment} required onChange={(event)=>handleChange("initialInvestment",event.target.value)}/>
        </p>
        <p>
            <label for="annual-investment">Annual Investment</label>
            <input type="number"  value={data.annualInvestment}  required onChange={(event)=>handleChange("annualInvestment",event.target.value)}/>
        </p>
       </div>
       <div class="input-group">
        <p>
            <label for="expected-return">Expected Return (%)</label>
            <input type="number"  value={data.expectedReturn} required onChange={(event)=>handleChange("expectedReturn",event.target.value)}/>
        </p>
        <p>
            <label for="duration">Duration (years)</label>
            <input type="number" value={data.duration}  required onChange={(event)=>handleChange("duration",event.target.value)}/>
        </p>
       </div>
       </section>
    )
}
