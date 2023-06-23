import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useDispatch } from "react-redux";
import { logout } from "../store/auth/operations";

import css from "./Nav.module.css";

function Nav() {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = isLoggedIn ? "Logout" : "Login";
  const createAccount = isLoggedIn ? "" : "Sign up";

  const pages = ["About", "Contacts", "Add Contact", login, createAccount];
  const linkPages = ["/", "/contacts", "/new-contact", "/login", "/register"];
  const settings = ["Profile", "Logout"];
  const linkSettings = ["/user-profile", "/"];

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onLogout = () => {
    dispatch(logout());
    handleCloseUserMenu();
  };

  const onRedirect = (index) => {
    if (index === 3 && isLoggedIn) {
      onLogout();
    }
    navigate(linkPages[index]);
  };

  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "#F24C3D",
        color: "#22A699",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ContactPageIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#22A699",
              textDecoration: "none",
            }}
          >
            DIRECTORY
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
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
              {/* MENU MOBILE */}
              {pages.map((page, i) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    sx={{
                      color: "#22A699",
                    }}
                  >
                    {i < pages.length - 2 ? (
                      <NavLink
                        to={linkPages[i]}
                        className={({ isActive }) =>
                          isActive ? css.active : undefined
                        }
                        end
                      >
                        {page}
                      </NavLink>
                    ) : isLoggedIn ? (
                      page !== "" && <button onClick={onLogout}>{page}</button>
                    ) : (
                      page !== "" && (
                        <NavLink
                          to={linkPages[i]}
                          className={({ isActive }) =>
                            isActive ? css.active : undefined
                          }
                          end
                        >
                          {page}
                        </NavLink>
                      )
                    )}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <ContactPageIcon
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#22A699",
              textDecoration: "none",
            }}
          >
            DIRECTORY
          </Typography>
          {/* MENU DESKTOP */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, i) => (
              <Button
                key={page}
                onClick={onRedirect.bind(this, i)}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* PROFILE SETTINGS */}
          {isLoggedIn && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://picsum.photos/300/300/"
                  />
                </IconButton>
              </Tooltip>
              {/* MENU SETTINGS */}
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting, i) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography
                      textAlign="center"
                      sx={{
                        color: "#22A699",
                      }}
                    >
                      {i < settings.length - 1 ? (
                        <NavLink
                          to={linkSettings[i]}
                          className={({ isActive }) =>
                            isActive ? css.active : undefined
                          }
                          end
                        >
                          {setting}
                        </NavLink>
                      ) : (
                        setting !== "" && (
                          <button onClick={onLogout}>{setting}</button>
                        )
                      )}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Nav;
