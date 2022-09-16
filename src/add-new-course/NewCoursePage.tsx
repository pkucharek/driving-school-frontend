import {
  Button,
  Container, FormControl, InputLabel, MenuItem,
  Paper, Select, SelectChangeEvent, Stack,
  TextField,
  Typography
} from "@mui/material";
import React from "react";
import axios from "axios";

export default function NewCoursePage() {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [nationalIdNumber, setNationalIdNumber] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [courseCategory, setCourseCategory] = React.useState('');

  const changeSelectedCategory = (event: SelectChangeEvent) => {
    setCourseCategory(event.target.value as string);
  };

  const sendCreateCourse = () => {
    console.log(firstName, lastName, nationalIdNumber, email, courseCategory);
    axios.post('http://localhost:8080/api/course', {
      firstName: firstName,
      lastName: lastName,
      nationalIdNumber: nationalIdNumber,
      email: email,
      courseCategory: courseCategory,
    }, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(() => {
      console.log("request successful")
    }).catch((error) => {
      console.log("Something wrong");
      console.log(error);
    })
  }

  return (
    <Container component="main" maxWidth="sm" sx={{mb: 4}}>
      <Paper
        variant="outlined"
        sx={{my: {xs: 3, md: 6}, p: {xs: 2, md: 3}}}
      >
        <Stack>
          <Typography component="h1" variant="h4">
            Dodaj nowego kursanta
          </Typography>
          <Typography component="h3">
            Dane osobowe
          </Typography>
          <TextField id="outlined-basic" label="Imię" variant="outlined"
                     margin="normal"
                     onChange={(event) => setFirstName(event.target.value)}/>
          <TextField id="outlined-basic" label="Nazwisko" variant="outlined"
                     margin="normal"
                     onChange={(event) => setLastName(event.target.value)}/>
          <TextField id="outlined-basic" label="Pesel" variant="outlined"
                     margin="normal"
                     onChange={(event) => setNationalIdNumber(event.target.value)}/>
          <TextField id="outlined-basic" label="Adres e-mail" variant="outlined"
                     margin="normal"
                     onChange={(event) => setEmail(event.target.value)}/>
          <FormControl sx={{ my:2 }}>
            <InputLabel id="demo-simple-select-label">Kategoria prawa jazdy</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={courseCategory}
              label="Kategoria"
              onChange={changeSelectedCategory}
            >
              <MenuItem value="AM">AM</MenuItem>
              <MenuItem value="A1">A1</MenuItem>
              <MenuItem value="A2">A2</MenuItem>
              <MenuItem value="A">A</MenuItem>
              <MenuItem value="B">B</MenuItem>
              <MenuItem value="B1">B1</MenuItem>
              <MenuItem value="C">C</MenuItem>
              <MenuItem value="D">D</MenuItem>
            </Select>
          </FormControl>
          <Button onClick={() => sendCreateCourse()}>
            Dodaj
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}
