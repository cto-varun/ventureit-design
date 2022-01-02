import React, { useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import HomeIcon from "@mui/icons-material/Home";
import MenuWhiteIcon from "../../assets/svg/menu-white-icon.svg";
import IconButton from "@mui/material/IconButton";
import AppsIcon from "@mui/icons-material/Apps";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ChatIcon from "@mui/icons-material/Chat";
import tw from "tailwind-styled-components";
import styledComponents from "styled-components";

// components
import WelcomeHeader from "../../components/WelcomeHeader";
import Activity from "../../components/Activity";
import Progress from "../../components/Progress";
import Event from "../../components/Events";
import Appbar from "../../components/Appbar";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	"& .MuiDrawer-paper": {
		position: "relative",
		whiteSpace: "nowrap",
		width: drawerWidth,
		backgroundColor: "#1884ff",
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
		boxSizing: "border-box",
		...(!open && {
			overflowX: "hidden",
			transition: theme.transitions.create("width", {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			width: theme.spacing(7),
			[theme.breakpoints.up("sm")]: {
				width: theme.spacing(9),
			},
		}),
	},
}));

const mdTheme = createTheme();

function DashboardContent() {
	const [open, setOpen] = useState(false);
	const toggleDrawer = () => {
		setOpen(!open);
	};

	return (
		<ThemeProvider theme={mdTheme}>
			<Box sx={{ display: "flex" }}>
				<CssBaseline />
				<Appbar open={open} setOpen={toggleDrawer} />
				<Box sx={{ display: { xs: "none", md: "flex" } }}>
					<Drawer variant="permanent" open={open}>
						<Toolbar
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "flex-end",
								px: [1],
							}}>
							<IconButton onClick={toggleDrawer}>
								<ChevronLeftIcon />
							</IconButton>
						</Toolbar>
						<IconContainer>
							<Image src={MenuWhiteIcon} height="25" width="25" />
						</IconContainer>
						<IconContainer>
							<HomeIcon sx={{ color: "#fff" }} />
						</IconContainer>
						<IconContainerLight>
							<AppsIcon />
						</IconContainerLight>
						<IconContainerLight>
							<BackupTableIcon />
						</IconContainerLight>
						<IconContainerLight>
							<AssessmentIcon />
						</IconContainerLight>
						<IconContainerLight>
							<ChatIcon />
						</IconContainerLight>
						<List></List>
					</Drawer>
				</Box>
				<Box
					component="main"
					sx={{
						backgroundColor: (theme) =>
							theme.palette.mode === "light"
								? theme.palette.grey[100]
								: theme.palette.grey[900],
						flexGrow: 1,
						height: "100vh",
						overflow: "auto",
					}}>
					<Toolbar />
					<Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
						<WelcomeHeader />
						<Event />
						<Activity />
						<Progress />
					</Container>
				</Box>
			</Box>
		</ThemeProvider>
	);
}

const IconContainer = tw.div`
  text-white
  flex
  justify-center
  items-center
  py-5
`;
const IconContainerLight = tw.div`
  text-light-text
  flex
  justify-center
  items-center
  py-5
`;
const Image = styledComponents.img`

`;

export default function Dashboard() {
	return <DashboardContent />;
}
