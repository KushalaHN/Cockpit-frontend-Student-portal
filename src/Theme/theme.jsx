import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#fafafa",
      policyBgcolor: "#f8fafc",
    },
    primary: {
      main: "#EAB308",
      secondary: "#EAB308",
      trimester: "#ffffff",
      trimesterAcccordian: "#ffffff",
      trimesterAcccordianText: "#000000",
      skippedBackground: "#F6F6F6",
      skippedText: "#000000",
      testQuestion: "#183251",
    },
  },
  header: {
    mode: "light",
    background: {
      default: "#fafafa",
      boderBottom: "1px solid #e0e0e0",
    },
    primary: {
      main: "#183251",
      active: "#ffffff",
      text: "#0f2848",
    },
  },
  footer: {
    mode: "light",
    background: {
      default: "#183251",
    },
  },
  passwordText: {
    main: "#222529",
    input: "#222529",
  },
  userprofie: {
    text: "#3E435D",
  },
  report: {
    headingReport: "#f5f5f5",
    headingReportBorder: "1px solid #e0e0e0",
    transparent: "transparent",
    paperBackground: "transparent",
    report: "#ffffff",
    filedReport: "#ffffff",
    avatar: "#1976d2",
    filedReportBorder: "#F0F0F0",
    testReportGraph: "#FFFFFF",
  },
  card: {
    bgcolor: "transparent",
    border: "1px solid #E5E7E9",
    textColor: "#000000",
    cardColor: "#ffffff",
    pricingcardBorder: "1px solid #E4E4E7",
    pricingboxShadow: "0px 26px 40px 0px #BCCAFF21",
  },
  HomeHeader: {
    headingText: "#183251",
    homeButton: "#183251",
    backgroundColor: "#f0f7ff",
    background2: "#f9f9f9",
    partnerText: "#1D1D1D",
    smallPartnerText: "#777777",
    reviewBackground: "#f5f5f5",
    reviewCard: "#1e2a44",
    questionBackground: "#289BDE1A",
    questionBackgroundnotchoosed: "#ffffff",
    questionAnswer: "#777777",
    questionBackgroundBorder: "transparent",
  },
  syllabus: {
    background: "#f8faf9",
    chaptersBackground: "#0f2b50",
    booksBackground: "#f5f5f5",
    instructionsText: "#555555",
    instrucctionsTermsText: "#183251",
  },
  policy: {
    text: "#303A42",
    subText: "#303A42",
    sectionsubText: "#000000",
  },
  typography: {
    fontFamily: '"Jost"',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: '"Jost"',
        },
      },
    },
  },
});
