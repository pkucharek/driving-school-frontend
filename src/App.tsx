import React from 'react';
import './App.css';
import {
  AppBar, Box, Button,
  Container,
  createTheme,
  CssBaseline,
  Paper,
  Step,
  StepLabel,
  Stepper,
  ThemeProvider,
  Toolbar,
  Typography
} from "@mui/material";
import Copyright from "./utils/Copyright";
import {CourseForm} from "./CourseForm";
import {PersonalDataForm} from "./PersonalDataForm";

const steps = [
  'Podaj dane osobowe kursanta',
  'Wybierz kurs'
]

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <PersonalDataForm />;
    case 1:
      return <CourseForm />;
    default:
      throw new Error('Unknown step');
  }
}

function App() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={createTheme()}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Ośrodek Szkolenia Kierowców
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb:4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          elevation={2}
        >
          <Typography component="h1" variant="h4">
            Dodaj nowego kursanta
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {getStepContent(activeStep)}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                  Back
                </Button>
              )}
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 3, ml: 1 }}
              >
                {activeStep === steps.length - 1 ? 'Dodaj kursanta' : 'Następny krok'}
              </Button>
            </Box>
          </>
        </Paper>
      </Container>
      <Copyright />
    </ThemeProvider>
  );
}

export default App;
