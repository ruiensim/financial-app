import img from '../assets/investment-calculator-logo.png';

export default function Header(){
    return(
        <header id="header">
            <h1>Financial App</h1>
            <img src={img} alt ="financial app"/>
        </header>
    )
}