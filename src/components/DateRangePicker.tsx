import { Stack } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

const DateRangePicker = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]} sx={{ pt: 0 }}>
        <Stack direction="row" pt={0}>
          <DatePicker
            label="Departure"
            // value={value}
            // onChange={(newValue) => setValue(newValue)}
            slotProps={{
              textField: {
                size: "medium",
                sx: { width: 225 },
              },
            }}
          />
          <DatePicker
            label="Return"
            slotProps={{
              textField: {
                size: "medium",
                sx: { width: 225 },
              },
            }}
          />
        </Stack>
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default DateRangePicker;
