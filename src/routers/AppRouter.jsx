import { Header } from "../components";
import Login from "../pages/Auth/Login";
import TrainingSyllabus from "../pages/Training/TrainingSyllabus";
import Chapter from "../pages/Chapter/chapter";
import TrainingQuestion from "../pages/Training/TrainingQuestions";
import TestSyllabus from "../pages/Test/TestSyllabus";
import TestRules from "../pages/Test/TestRules";
import TestPage2 from "../pages/Test/TestPage2";
import UserProfile from "../pages/Profile/UserProfile";

import ForgetPassword from "../pages/Auth/ForgetPassword";
import ResetPassword from "../pages/Auth/ResetPassword";
import ReportPage from "../pages/Report/ReportPage";
import ChangePassword from "../pages/Profile/ChangePassword";

import ComingSoon from "../pages/CommingSoon/commingSoon";
import ScrollToTop from "../components/ScrollToTop";

import TestTermsAndConditions from "../components/Footer/TestTermsAndConditions";

import FlightLog from "../pages/Profile/FlightLog";
import FlightLogReport from "../pages/Profile/FlightLogReport";

import TestResultPage from "../pages/Test/TestResult";

import TokenExpiry from "../utils/TokenExpiry";

const AppContent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (TokenExpiry()) {
      //check for initial render when component mounts
      navigate("/");
    }

    const interval = setInterval(() => {
      //checks at every minute
      if (TokenExpiry()) {
        navigate("/");
      }
    }, 60 * 1000); // check every 1 min

    return () => clearInterval(interval);
  }, [navigate]);

  const location = useLocation();
  const { pathname } = location;

  const AuthRoute = () => {
    const isAuthenticated = !!localStorage.getItem("authToken");
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
  };
  const hideHeaderFooter =
    pathname === "/" ||
    pathname === "/forgetpassword" ||
    pathname === "/testpage" ||
    pathname.startsWith("/resetpassword");

  return (
    <>
      {!hideHeaderFooter && <Header />}

      <Box
        sx={{
          flex: 1,
          minHeight: { xs: "calc(100vh - 64px)", md: "calc(80vh - 64px)" },
        }}
      >
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/resetpassword/:token" element={<ResetPassword />} />

          <Route
            path="/test-terms-and-conditions"
            element={<TestTermsAndConditions />}
          />

          <Route path="/training" element={<TrainingSyllabus />} />
          <Route path="/chapter" element={<Chapter />} />
          <Route
            path="/trainingQuestion/:syllabusName/:bookName/:chapterName"
            element={<TrainingQuestion />}
          />
          <Route path="/test" element={<TestSyllabus />} />
          <Route path="/testRules" element={<TestRules />} />
          <Route path="/testpage" element={<TestPage2 />} />

          <Route path="/syllabus" element={<ComingSoon />} />
          <Route path="/taketest" element={<ComingSoon />} />

          <Route element={<AuthRoute />}>
            <Route path="/userprofile" element={<UserProfile />} />
            <Route path="/report" element={<ReportPage />} />
            <Route path="/changepassword" element={<ChangePassword />} />

            <Route path="/flight-log" element={<FlightLog />} />
            <Route path="/flight-log-report" element={<FlightLogReport />} />
            <Route path="/test-result" element={<TestResultPage />} />
          </Route>
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </Box>
    </>
  );
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default AppRouter;
