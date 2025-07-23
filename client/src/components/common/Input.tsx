import { Input as MuiInput, Typography, MenuItem, RadioGroup, FormControlLabel, Radio, Select, Box } from "@mui/material";

interface Option {
  value: string;
  label: string;
}

interface CustomInputProps {
  label: string;
  placeholder?: string;
  type?: "text" | "select" | "radio";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  sx?: object;
  inputProps?: object;
  options?: Option[]; // Para select y radio
  name?: string;
}

const Input = ({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  sx = {},
  inputProps = {},
  options = [],
  name,
}: CustomInputProps) => (
  <Box sx={{ width: "100%" }}>
    <Typography
      sx={{
        textAlign: "start",
        fontSize: ".85rem",
        fontWeight: "500",
        mb: ".2rem",
      }}
    >
      {label}
    </Typography>
      {type === "select" ? (
        <Select
          fullWidth
          value={value}
          onChange={(event, child) => {
            if (onChange) {
              const syntheticEvent = {
                ...event,
                target: {
                  ...event.target,
                  value: event.target.value,
                  name: name ?? "",
                },
              } as React.ChangeEvent<HTMLInputElement>;
              onChange(syntheticEvent);
            }
          }}
          name={name}
          sx={{
            m: '.5rem 0 !important',
            backgroundColor: 'white',
            fontSize: '.95rem',
            '& .MuiSelect-select': {
              padding: '10px',
              textAlign: 'left',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#7c4dff',
              boxShadow: '0 0 0 2px #7c4dff33',
            },
            ...sx,
          }}
          size="small"
          displayEmpty
          MenuProps={{
            PaperProps: {
              sx: {
                fontSize: '.85rem',
                backgroundColor: '#fafaff',
              }
            }
          }}
        >
          {options.map((option) => (
            <MenuItem
              key={option.value}
              value={option.value}
              disabled={option.disabled}
              hidden={option.hidden}
              sx={{
                fontSize: '.85rem',
              }}
            >
              {option.label}
            </MenuItem>
          ))}
        </Select>
    ) : type === "radio" ? (
      <RadioGroup
        row
        value={value}
        onChange={onChange}
        name={name}
        sx={{
          //marginY: ".5rem",
          ...sx,
        }}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={
              <Radio 
                sx={{
                  color: "#7c4dff", // color del círculo cuando NO está seleccionado
                  '&.Mui-checked': {
                    color: "#7c4dff", // color del círculo cuando está seleccionado
                  },
                }}
              />
            }
            label={option.label}
            sx={{
              "& .MuiTypography-root": {
                fontSize: ".85rem",
              },
            }}
          />
        ))}
      </RadioGroup>
    ) : (
      <MuiInput
        sx={{
          marginY: ".5rem",
          width: "100%",
          padding: 0,
          border: `.05rem solid #e0e0e0`,
          backgroundColor: "white",
          transition: "box-shadow 0.2s, border 0.2s",
          boxSizing: "border-box",
          "&:focus-within": {
            border: `.05rem solid #7c4dff`,
            boxShadow: `0 0 0 2px #7c4dff33`,
          },
          "&:before, &:after": {
            borderBottom: "none !important",
          },
          ...sx,
        }}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        inputProps={{
          style: {
            padding: 10,
            textAlign: "left",
            fontSize: ".8rem",
            backgroundColor: "white",
          },
          ...inputProps,
        }}
      />
    )}
  </Box>
);

export default Input;