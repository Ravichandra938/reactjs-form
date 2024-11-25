import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({ name: '', age: '', file: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async () => {
    // Create a FormData object to handle the form fields and file upload
    const formDataObj = new FormData();
    formDataObj.append('name', formData.name); // Add the 'name' field
    formDataObj.append('age', formData.age);   // Add the 'age' field
    formDataObj.append('file', formData.file); // Add the uploaded file
  
    try {
      // Send a POST request to the Flask server
      const response = await axios.post('http://localhost:5000/submit', formDataObj, {
        headers: {
          'Content-Type': 'multipart/form-data', // Important for file uploads
        },
      });
  
      // Handle success response
      console.log('Response from backend:', response.data);
      alert(response.data.message);
    } catch (error) {
      // Handle errors
      console.error('Error submitting form:', error.response?.data || error.message);
      alert('Error submitting form. Please try again.');
    }
  };

  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Healthcare Dashboard
      </Typography>
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        margin="normal"
        fullWidth
      />
      <TextField
        label="Age"
        name="age"
        type="number"
        value={formData.age}
        onChange={handleChange}
        margin="normal"
        fullWidth
      />
      <Button variant="outlined" component="label" sx={{ marginTop: 2 }}>
        Upload File
        <input type="file" hidden onChange={handleFileChange} />
      </Button>
      {formData.file && <Typography>{formData.file.name}</Typography>}
      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: 4 }}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Box>
  );
}

export default App;
