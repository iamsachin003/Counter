import React, { ChangeEvent } from 'react';
import Button from './Components/Button';
import Input from './Components/Input';
import './App.css';

const App = () => {
  const [maxValue] = React.useState<number>(100);
  const [minValue] = React.useState<number>(1);
  const [count, setCount] = React.useState<number>(minValue ?? 1);

  const handleInputChange = React.useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9\b]+$/;
    if (regex.test(e.target.value) && +e.target.value <= maxValue) {
      setCount(+e.target.value)
    }
  }, [maxValue])

  const IncrementCounter = React.useCallback(() => {
    if (count === maxValue) return;
    setCount(count + 1)
  }, [count, maxValue])

  const DecrementCounter = React.useCallback(() => {
    if (count === minValue) return;
    setCount(count - 1)
  }, [count, minValue])

  return (
    <React.Fragment>
      <h4 className="header">Min Value : {minValue} | Max Value: {maxValue}</h4>
      <div className="counter-container">
        <Button type="button" backgroundColor="#ffffff" color="#B24242" borderRadius="8px 0 0 8px"
          onButtonChange={DecrementCounter}>-</Button>
        <Input type="text" value={count} inputChange={handleInputChange} />
        <Button type="button" backgroundColor="#B24242" color="#ffffff" borderRadius="0 8px 8px 0"
          onButtonChange={IncrementCounter}
        >+</Button>
      </div>
    </React.Fragment>
  )
}

export default App;


