import React from 'react';
import { Box, Typography } from '@mui/material';

const StatsPage = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4">URL Statistics</Typography>
      <Typography mt={2}>
        This page will display shortened URLs and their statistics like:
        creation time, expiry time, total clicks, source, and location.
      </Typography>
    </Box>
  );
};

export default StatsPage;
