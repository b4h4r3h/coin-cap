import { Input, Tooltip } from 'antd';
import { useState } from 'react';
import { NumberInput } from './style';
const formatNumber = (value) => new Intl.NumberFormat().format(value);
const NumericInput = (props) => {
  const { value, onChange } = props;
  const handleChange = (e) => {
    const { value: inputValue } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;
    if (reg.test(inputValue) || inputValue === '' || inputValue === '-') {
      onChange(inputValue);
    }
  };

  // '.' at the end or only '-' in the input box.
  const handleBlur = () => {
    let valueTemp = value;
    if (value.charAt(value.length - 1) === '.' || value === '-') {
      valueTemp = value.slice(0, -1);
    }
    onChange(valueTemp.replace(/0*(\d+)/, '$1'));
  };
  const title = value ? (
    <span className="numeric-input-title">{value !== '-' ? formatNumber(Number(value)) : '-'}</span>
  ) : (
    'Input a number'
  );

  return (
      <Input
        {...props}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="0"
        maxLength={16}
      />
  );
};
export function CoinInput () {
  const [value, setValue] = useState('');
  return (
    <NumberInput>
    <NumericInput className="input"
      style={{
        width: 160,
      }}
      value={value}
      onChange={setValue}
    />
    </NumberInput>
  );
}