import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import VolunteerDashboard from "./pages/VolunteerDashboard";
import TeacherStudents from "./pages/TeacherStudents";
import TeacherDashboard from "./pages/TeacherDashboard";
import CoordinatorDashboard from "./pages/CoordinatorDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";
import VolunteersPage from "./pages/VolunteersPage";
import TeachersPage from "./pages/TeachersPage";
import MessagesPage from "./pages/MessagesPage";
import TeacherSettings from "./pages/TeacherSettings";
import VolunteerAttendance from "./pages/VolunteerAttendance";
import TeacherSessions from "./pages/TeacherSessions";
import TeacherMessages from "./pages/TeacherMessages";
import CoordinatorSettings from "./pages/CoordinatorSettings";
import VolunteerSettings from "./pages/VolunteerSettings";
import ReportPage from "./pages/Report";
import TeacherResources from "./pages/TeacherResources";
import VolunteerResources from "./pages/VolunteerRes";
import AddUserForm from "./pages/AdminUserAddForm";


const queryClient = new QueryClient();

const ProtectedRoute = ({ children, allowedRole }: { children: React.ReactNode; allowedRole: string }) => {
  const userRole = localStorage.getItem('userRole');

  if (!userRole) {
    return <Navigate to="/" replace />;
  }

  if (userRole !== allowedRole) {
    return <Navigate to={`/${userRole}`} replace />;
  }

  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/volunteer"
            element={
              <ProtectedRoute allowedRole="volunteer">
                <VolunteerDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/volunteer/settings"
            element={
              <ProtectedRoute allowedRole="volunteer">
                <VolunteerSettings />
              </ProtectedRoute>
            }
          />
          <Route
            path="/teacher"
            element={
              <ProtectedRoute allowedRole="teacher">
                <TeacherDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/teacher/students"
            element={
              <ProtectedRoute allowedRole="teacher">
                <TeacherStudents />
              </ProtectedRoute>
            }
          />
          <Route
            path="/coordinator"
            element={
              <ProtectedRoute allowedRole="coordinator">
                <CoordinatorDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/coordinator/volunteers"
            element={
              <ProtectedRoute allowedRole="coordinator">
                <VolunteersPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/coordinator/teachers"
            element={
              <ProtectedRoute allowedRole="coordinator">
                <TeachersPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/coordinator/messages"
            element={
              <ProtectedRoute allowedRole="coordinator">
                <MessagesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/teacher/sessions"
            element={
              <ProtectedRoute allowedRole="teacher">
                <TeacherSessions />
              </ProtectedRoute>
            }
          />
          <Route
            path="/coordinator/settings"
            element={
              <ProtectedRoute allowedRole="coordinator">
                <CoordinatorSettings />
              </ProtectedRoute>
            }
          />
          <Route
            path="/teacher/messages"
            element={
              <ProtectedRoute allowedRole="teacher">
                <TeacherMessages />
              </ProtectedRoute>
            }
          />
          <Route
            path="/teacher/settings"
            element={
              <ProtectedRoute allowedRole="teacher">
                <TeacherSettings />
              </ProtectedRoute>
            }
          />
          <Route
            path="/volunteer/attendance"
            element={
              <ProtectedRoute allowedRole="volunteer">
                <VolunteerAttendance />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRole="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/report"
            element={
              <ProtectedRoute allowedRole="admin">
                <ReportPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/users"
            element={
              <ProtectedRoute allowedRole="admin">
                <AddUserForm />
              </ProtectedRoute>
            }
          />
          <Route 
            path="/teacher/resources"
            element={
              <ProtectedRoute allowedRole="teacher">
                <TeacherResources />
              </ProtectedRoute>
            }
          />
          <Route 
            path="/volunteer/resources"
            element={
              <ProtectedRoute allowedRole="volunteer">
                <VolunteerResources />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
