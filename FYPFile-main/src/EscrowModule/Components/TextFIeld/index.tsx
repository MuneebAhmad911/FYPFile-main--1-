// components/CustomTextField.tsx
import React from 'react';
import { TextField, Typography } from '@mui/material';

interface Props {
  label: string;
  value: string | number;
  multiline?: boolean;
  rows?: number;
}

export const CustomTextField: React.FC<Props> = ({ label, value, multiline = false, rows = 1 }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <Typography variant="subtitle2" fontWeight={500} gutterBottom>
        {label}
      </Typography>
      <TextField
        fullWidth
        value={value}
        placeholder={label}
        variant="outlined"
        multiline={multiline}
        rows={rows}
        InputProps={{
          style: {
            borderRadius: '12px',
            backgroundColor: '#f9f9f9',
          }
        }}
        InputLabelProps={{ shrink: false }}
      />
    </div>
  );
};

export default CustomTextField;
