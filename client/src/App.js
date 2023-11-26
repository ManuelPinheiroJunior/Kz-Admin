import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
import Products from "scenes/products";
import Customers from "scenes/customers";
import Transactions from "scenes/transactions";
import Geography from "scenes/geography";
import Overview from "scenes/overview";
import Daily from "scenes/daily";
import Monthly from "scenes/monthly";
import Breakdown from "scenes/breakdown";
import Admin from "scenes/admin";
import LoginPage from "scenes/loginPage";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.global.token));
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route element={<Layout />}>
              <Route path="/dashboard" element={isAuth ? <Dashboard /> : <Navigate to="/" />} />
              <Route path="/products" element={isAuth ? <Products /> : <Navigate to="/" />} />
              <Route path="/customers" element={isAuth ? <Customers /> : <Navigate to="/" />} />
              <Route path="/transactions" element={isAuth ? <Transactions /> : <Navigate to="/" />} />
              <Route path="/geography" element={isAuth ? <Geography /> : <Navigate to="/" />} />
              <Route path="/overview" element={isAuth ? <Overview /> : <Navigate to="/" />} />
              <Route path="/daily" element={isAuth ? <Daily /> : <Navigate to="/" />} />
              <Route path="/monthly" element={isAuth ? <Monthly /> : <Navigate to="/" />} />
              <Route path="/breakdown" element={isAuth ? <Breakdown /> : <Navigate to="/" />} />
              <Route path="/admin" element={isAuth ? <Admin /> : <Navigate to="/" />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
