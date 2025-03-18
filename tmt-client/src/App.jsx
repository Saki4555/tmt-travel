import { Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout";
import {
  AboutUs,
  AddDeals,
  AddVideo,
  AllTravelDeals,
  ContactUs,
  Home,
  Login,
  ManageDeals,
  Register,
  TravelDetails,
} from "./pages";
import ScrollToTop from "./providers/ScrollToTop";
import DashboardLayout from "./layouts/DashboardLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./providers/AuthProvider";
import DashboardWelcomePage from "./pages/DashboardWelcomePage";
import AddImage from "./pages/AddImage";
import PrivateRoute from "./private/PrivateRoute";
import AdminRoute from "./private/AdminRoute";
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <ScrollToTop /> <Toaster />
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          {" "}
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
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
    </>
  );
}

export default App;
