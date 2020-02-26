import * as React from 'react';
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
} from '@material-ui/core';

type Props = {
  title: string;
  selectedValue: string;
  onChangeValue: Function;
};

const data = [
  { label: 'value1', value: '1' },
  { label: 'value2', value: '2' },
  { label: 'value3', value: '3' },
];

export const RadioInput: React.FC<Props> = props => {
  return (
    <div>
      <Typography>{props.title}</Typography>
      <RadioGroup>
        {data.map((d, i) => (
          <FormControlLabel
            key={i}
            value={d.value}
            label={d.label}
            control={<Radio />}
            onChange={e => {
              const element = e.target as HTMLInputElement;
              props.onChangeValue(element.value);
            }}
          />
        ))}
      </RadioGroup>
    </div>
  );
};
