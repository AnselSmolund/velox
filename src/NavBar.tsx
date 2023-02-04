import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Switch,
} from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { DarkModeSwitch } from "./DarkModeSwitch";

const pages = [
  { label: "About", route: "/about" },
  { label: "Our Riders", route: "/riders" },
  { label: "Sponsors", route: "/sponsors" },
  { label: "Calendar", route: "/calendar" },
  { label: "Contact", route: "/contact" },
];

interface NavBarProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}
export const NavBar: React.FC<NavBarProps> = ({ darkMode, setDarkMode }) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavClick = (route: string) => {
    console.log(route);
    navigate(route);
  };

  const navigate = useNavigate();

  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            onClick={() => navigate("/")}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              ":hover": {
                cursor: "pointer",
                color: "#F0A868",
              },
            }}
          >
            DEUS VELOX
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuOutlined />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {[{ label: "Home", route: "/" }, ...pages].map((page) => (
                <MenuItem
                  key={page.label}
                  onClick={() => {
                    handleCloseNavMenu();
                    handleNavClick(page.route);
                  }}
                >
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Typography
                key={page.label}
                onClick={(e) => {
                  handleCloseNavMenu();
                  handleNavClick(page.route);
                }}
                sx={{
                  my: 2,
                  mx: 2,
                  color: "inherit",
                  display: "block",
                  ":hover": {
                    cursor: "pointer",
                    color: "#F0A868",
                  },
                }}
              >
                {page.label}
              </Typography>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <DarkModeSwitch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
