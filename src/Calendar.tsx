import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import logoImg from "./assets/logo.jpeg";

export const Calendar: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        justifyContent: "center",
        textAlign: "center",
        mt: 4,
      }}
    >
      <Box sx={{}}>
        <Typography variant="h2">Upcoming Race Schedule: </Typography>
      </Box>
      <Box>
        <img
          src="https://corp.formula1.com/wp-content/uploads/2022/09/Capture.jpg"
          loading="lazy"
          width="300"
        />
      </Box>
    </Box>
  );
};
