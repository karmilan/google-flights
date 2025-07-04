import { Grid, Typography } from "@mui/material";
import ExploreImage from "./ExploreImage";

const ExploreDestinationsSection = () => {
  return (
    <Grid mt="36px">
      <Typography fontSize="20px" fontWeight="800">
        Find cheap flights from Colombo to anywhere
      </Typography>
      <Grid container mt="18px" justifyContent="center">
        <ExploreImage />
      </Grid>
    </Grid>
  );
};

export default ExploreDestinationsSection;
