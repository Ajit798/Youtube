import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Grid,
  Menu,
  Container,
  Button,
  MenuItem,
  Avatar
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import profilePic from "../../assets/images/Profilepic.png";
import "../../../style.css";

const pages = ["About", "Skills", "PortFolio", "Contact"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    window.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest"
    });
    setAnchorElNav(null);
  };

  return (
    <Grid item Container md={12} sm={12} xs={12}>
      <AppBar
        position="static"
        sx={{ background: "transparent", boxShadow: "inherit", width: "100%" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Avatar size="sm" src={profilePic} sx={{ margin: 2 }} />

            <Typography
              variant="body1"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                marginLeft: "5px",

                fontWeight: 700,

                color: "inherit",
                textDecoration: "none"
              }}
            >
              Ajit Chaubey
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left"
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" }
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="caption"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 4,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,

                fontWeight: 700,

                color: "inherit",
                textDecoration: "upperCase"
              }}
            >
              AJIT CHAUBEY
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center"
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ width: "100%" }}>
              <Button
                variant="contained"
                color="error"
                sx={{ borderRadius: "12px" }}
              >
                <a
                  href="https://drive.google.com/uc?export=download&id=1MItZGID3viTlx4u6ViCn9Xv1ozdC_wTH"
                  download
                >
                  <Typography variant="subtitle2" whiteSpace={"nowrap"}>
                    Download CV
                  </Typography>
                </a>
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Grid>
  );
}
export default Navbar;
