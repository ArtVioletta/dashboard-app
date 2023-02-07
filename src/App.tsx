import "./App.css";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "./scenes/global/TopBar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./scenes/dashboard/Dashboard";
import SideBar from "./scenes/global/SideBar";
import Contacts from "./scenes/contacts/Contacts";
import Team from "./scenes/team/Team";
import Invoices from "./scenes/invoices/Invoices";
import Form from "./scenes/form/Form";

function App() {
  const [theme, colorMode] = useMode();
  // @ts-ignore
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/Invoices" element={<Invoices />} />
              <Route path="/Form" element={<Form />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
