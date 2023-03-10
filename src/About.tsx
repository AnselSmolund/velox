import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import logoImg from "./assets/logo.jpeg";

export const About: React.FC = () => {
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
      <Box>
        <img src={logoImg} loading="lazy" width="200" />
      </Box>
      <Box sx={{}}>
        <Typography variant="h2">About Deus Velox</Typography>
      </Box>
    </Box>
  );
};
