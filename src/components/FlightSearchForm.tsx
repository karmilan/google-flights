import { Search } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import DateRangePicker from "./DateRangePicker";

const FlightSearchForm = () => {
  return (
    <Box position="relative">
      <Card elevation={6} sx={{ borderRadius: 5 }}>
        <CardContent sx={{ my: 2 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack direction="row" spacing={2}>
                <Autocomplete
                  disablePortal
                  options={["Inception", "Interstellar", "The Dark Knight"]}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Movie" />
                  )}
                />

                <Autocomplete
                  disablePortal
                  options={["Inception", "Interstellar", "The Dark Knight"]}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Movie" />
                  )}
                />
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <DateRangePicker />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Button
        variant="contained"
        color="primary"
        sx={{
          position: "absolute",
          bottom: "-15px",
          right: "45%",
          borderRadius: "24px",
        }}
        startIcon={<Search />}
      >
        Explore
      </Button>
    </Box>
  );
};

export default FlightSearchForm;
