import { useState } from "react";
import InputAmount from "./components/InputAmount"
import SelectCountry from "./components/SelectCountry"
import SwitchCurrency from "./components/SwitchCurrency"

function App() {
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');

  return (
    <div className="mx-8">
      <div className="flex flex-col max-w-3xl shadow-xl dark:shadow-neutral-950 bg-neutral-100/20 dark:bg-neutral-800/20 rounded-lg mx-auto p-8 mt-48">
        <h2 className="text-4xl font-bold mb-10 text-center leading-snug text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-green-500 to-lime-500">Currency Converter</h2>
        <div className="flex md:flex-row flex-col gap-8 md:gap-0 justify-between items-center">
          <InputAmount />
          <div className="flex gap-8">
            <SelectCountry label={"From"} from={fromCurrency} setValue={setFromCurrency} />
            <SwitchCurrency />
            <SelectCountry label={"To"} to={toCurrency} setValue={setToCurrency} />
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default App
