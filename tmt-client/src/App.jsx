import React from "react";
import { Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout";

import ScrollToTop from "./providers/ScrollToTop";
import DashboardLayout from "./layouts/DashboardLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./providers/AuthProvider";


import PrivateRoute from "./private/PrivateRoute";
import AdminRoute from "./private/AdminRoute";
import { HelmetProvider } from "react-helmet-async";



const Home = React.lazy(() => import("./pages/Home"));
const ContactUs = React.lazy(() => import("./pages/ContactUs"));
const AboutUs = React.lazy(() => import("./pages/AboutUs"));
const AllTravelDeals = React.lazy(() => import("./pages/AllTravelDeals"));
const TravelDetails = React.lazy(() => import("./pages/TravelDetails"));
const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));
const AddDeals = React.lazy(() => import("./pages/AddDeals"));
const ManageDeals = React.lazy(() => import("./pages/ManageDeals"));
const AddImage = React.lazy(() => import("./pages/AddImage"));
const DashboardWelcomePage = React.lazy(() => import("./pages/DashboardWelcomePage"));
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <ScrollToTop /> <Toaster />
      <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          {" "}
          <Routes>
            <Route element={<MainLayout />}>
              <Route  path="/" element={<Home />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/all-travel-deals" element={<AllTravelDeals />} />
              <Route path="/details/:id" element={<TravelDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
            <Route path="/dashboard" element={<PrivateRoute><DashboardLayout /></PrivateRoute>}>
              <Route path="/dashboard" element={<AdminRoute><DashboardWelcomePage /></AdminRoute>} />
              <Route path="/dashboard/add-deals" element={<AdminRoute><AddDeals /></AdminRoute>} />
              <Route path="/dashboard/manage-deals" element={<AdminRoute><ManageDeals /></AdminRoute>} />
              <Route path="/dashboard/add-images" element={<AdminRoute><AddImage/></AdminRoute>} />
            </Route>
           
          </Routes>
        </AuthProvider>
      </QueryClientProvider>
      </HelmetProvider>
    </>
  );
}

export default App;
