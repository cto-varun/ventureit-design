import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import styledComponents from "styled-components";
import Logo from "../assets/svg/logo.svg";
import Profile from "../assets/svg/profile.svg";
import tw from "tailwind-styled-components";
import MenuIcon from "../assets/svg/menu.svg";
import Arrow from "../assets/images/arrowDown.png";
import ChatIcon from "../assets/images/chatIcon.png";
import NotificationIcon from "../assets/images/notificationIcon.png";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	background: "#ffffff",
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(["width", "margin"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `100%`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

export default function Appbar(props) {
	const { open, setOpen } = props;
	return (
		<AppBar position="absolute" open={open}>
			<Toolbar
				sx={{
					pr: "24px",
				}}>
				<Box sx={{ width: "100%", display: { md: "none" } }}>
					<Wrapper>
						<Left>
							<IconButton
								edge="start"
								aria-label="open drawer"
								onClick={() => {
									setOpen();
								}}>
								{/* <MenuIcon /> */}
								<LogoImg src={MenuIcon} height="30" width="30" />
							</IconButton>
						</Left>
						<Center>
							<LogoImg src={Logo} />
						</Center>
						<Right>
							<LogoImg src={Profile} />
						</Right>
					</Wrapper>
				</Box>
				<Box sx={{ width: "100%", display: { xs: "none", md: "flex" } }}>
					<Wrapper>
						<Left>
							<LogoImg src={Logo} />
						</Left>
						<Right>
							<Search>
								<InputContainer>
									<Input
										placeholder="Search and Find"
										style={{ fontSize: "12px", color: "#cdcdcd" }}></Input>
									<SearchIconContainer>
										<SearchIcon sx={{ fontSize: "18px" }} />
									</SearchIconContainer>
								</InputContainer>
								<Button>
									<ButtonText>+ ADD</ButtonText>
								</Button>
							</Search>
							<IconImg src={NotificationIcon} />
							<IconImg src={ChatIcon} />
							<ProfileText>Clarence Russell</ProfileText>
							<LogoImg src={Profile} />
							<SmallImg src={Arrow} />
						</Right>
					</Wrapper>
				</Box>
			</Toolbar>
		</AppBar>
	);
}

const LogoImg = styledComponents.img``;
const Wrapper = tw.div`
    flex
    justify-between
    w-full
`;

const Left = tw.div`
  flex
  items-center
`;
const Center = tw.div``;
const Right = tw.div`
    flex
`;
const SmallImg = tw.img`
  object-contain
  w-2
  ml-3
`;
const IconImg = tw.img`
  object-contain
  w-5
  mr-7
`;
const ProfileText = styledComponents.div`
	color: #9d9bb6;
  font-size: 12px;
	font-family: GB;
  display: flex;
  align-items: center;
  margin-right: 10px
`;
const Search = tw.div`
  flex
  w-128
  py-2
`;
const Button = tw.div`
  w-24
  h-full
  flex
  justify-center
  items-center
  rounded-2xl
  mr-12
  ml-4
  text-sm
  font-GB
  bg-primary-blue
`;
const ButtonText = styledComponents.div`
  font-family: GB;
  font-size: 12px;
`;
const Input = tw.input`
  h-full
  w-full
  bg-light-grey
  px-4
`;
const InputContainer = styledComponents.div`
  position: relative;
  width: 100%;
  display:flex;
  align-items: center;
`;
const SearchIconContainer = styledComponents.div`
  position: absolute;
  right: 15px;
  color: #cdcdcd;
`;
