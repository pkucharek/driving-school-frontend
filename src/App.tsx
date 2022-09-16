import React from 'react';
import './App.css';
import {
  AppBar,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Toolbar,
  Typography
} from "@mui/material";
import Copyright from "./utils/Copyright";
import NewCoursePage from "./add-new-course/NewCoursePage";

function App() {
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
      <NewCoursePage />
      <Copyright />
    </ThemeProvider>
  );
}

export default App;
