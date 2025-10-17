import { useState } from 'react'
import './App.css'

function App() {
  const [totalPrice, setTotalPrice] = useState('')
  const [discountPercent, setDiscountPercent] = useState('')
  const [discountedPrice, setDiscountedPrice] = useState(null)

  const calculateDiscount = () => {
    const price = parseFloat(totalPrice)
    const discount = parseFloat(discountPercent)
    if (!isNaN(price) && !isNaN(discount) && discount >= 0 && discount <= 100) {
      const discountAmount = price * (discount / 100)
      setDiscountedPrice(price - discountAmount)
    } else {
      setDiscountedPrice(null)
    }
  }

  return (
    <div className="App">
      <h1>Discount Calculator</h1>
      <div className="calculator">
        <label>
          Total Price:
          <input
            type="number"
            value={totalPrice}
            onChange={(e) => setTotalPrice(e.target.value)}
            placeholder="Enter total price"
          />
        </label>
        <label>
          Discount Percentage:
          <input
            type="number"
            value={discountPercent}
            onChange={(e) => setDiscountPercent(e.target.value)}
            placeholder="Enter discount %"
            min="0"
            max="100"
          />
        </label>
        <button onClick={calculateDiscount}>Calculate Discount</button>
        {discountedPrice !== null && (
          <div className="result">
            <p>Discounted Price: ${discountedPrice.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App

