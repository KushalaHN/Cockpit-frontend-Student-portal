const services = [
  "Web Development",
  "Mobile Development",
  "Digital Marketing",
  "Tele Assisting",
  "E-Commerce Management",
  "UI/UX Designing",
  "Software Development",
];

const Container2 = styled(Box)(({ theme }) => ({
  backgroundColor: "#020617",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "40px",
  fontFamily: "Poppins",
}));

const Wrapper = styled(Box)(({ theme }) => ({
  border: "2px solid #FFD700",
  borderRadius: "24px",
  padding: "40px 20px",
  width: "100%",
  maxWidth: "1400px",
  boxSizing: "border-box",
}));

const InfoBox = styled(Box)(({ theme }) => ({
  color: "#fff",
  paddingRight: theme.spacing(4),
}));

const ServiceCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#0F172A",
  borderRadius: 12,
  color: "#fff",
  height: "100%",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "Poppins",
  overflow: "hidden",
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    right: 0,
    width: "40px",
    height: "100%",
    background:
      "radial-gradient(circle at top right, #FFD700 20%, transparent 60%)",
    borderTopRightRadius: 12,
  },
}));

const ResponsiveGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginTop: theme.spacing(4),
  },
}));

const ComingSoon = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container2>
      <Wrapper>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <InfoBox>
              <Typography
                sx={{ color: "#FFD700", fontSize: 12, fontWeight: 600 }}
              >
                Empowering businesses
              </Typography>
              <Typography variant="h4" fontWeight="bold" mt={1}>
                Services we offer
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#CBD5E1", mt: 2, maxWidth: 300, lineHeight: 1.6 }}
              >
                Delivering end-to-end IT services that drive innovation — from
                strategy to execution in web, mobile and Marketing
              </Typography>
            </InfoBox>
          </Grid>

          <Grid item xs={12} md={8}>
            <ResponsiveGrid container spacing={2}>
              {services.map((service, idx) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
                  <ServiceCard elevation={0}>
                    <CardContent>
                      <Typography align="center" fontSize={14}>
                        {service}
                      </Typography>
                    </CardContent>
                  </ServiceCard>
                </Grid>
              ))}
            </ResponsiveGrid>
          </Grid>
        </Grid>
      </Wrapper>
    </Container2>
  );
};

export default ComingSoon;
