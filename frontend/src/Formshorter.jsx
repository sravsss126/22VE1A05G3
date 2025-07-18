import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

function generateShortCode(length = 6) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < length; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

const ShortenForm = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleShorten = () => {
    const isValid = /^https?:\/\/.+$/.test(longUrl);
    if (!isValid) {
      alert('Please enter a valid URL starting with http:// or https://');
      return;
    }

    const shortCode = generateShortCode();
    const shortened = `http://localhost:5000/${shortCode}`;
    setShortUrl(shortened);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        URL Shortener
      </Typography>
      <TextField
        fullWidth
        label="Enter Long URL"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" onClick={handleShorten}>
        Generate Short URL
      </Button>
      {shortUrl && (
        <Typography mt={3} variant="h6" color="primary">
          Short URL: <a href={longUrl} target="_blank" rel="noreferrer">{shortUrl}</a>
        </Typography>
      )}
    </Box>
  );
};

export default ShortenForm;
