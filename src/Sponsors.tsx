import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import logoImg from "./assets/logo.jpeg";

export const Sponsors: React.FC = () => {
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
        <Typography variant="h2">Our Sponsors</Typography>
      </Box>
      <Box>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5tSQs2xlkkK6uBs3SMv5w6wX9L-mr7d0ScA&usqp=CAU"
          loading="lazy"
          width="200"
        />
      </Box>
    </Box>
  );
};
