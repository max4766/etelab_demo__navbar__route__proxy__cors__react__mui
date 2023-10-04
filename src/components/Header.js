import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Drawer from '@mui/material/Drawer';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';

function ElevationScroll(props) {
  
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function ElevateAppBar(props) {
 
  const navigate = useNavigate();
  
  const [anchorEl, setAnchorEl] = React.useState(null);
 
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleMenuClose = () => {
    setAnchorEl(null);
  };


  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);  
  
  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };


  const [open, setOpen] = React.useState(false);
  const [openReq, setOpenReq] = React.useState(false);
  const [openRecpt, setOpenRecpt] = React.useState(false);
  const [openPlan, setOpenPlan] = React.useState(false);
  const [openPerfReg, setOpenPerfReg] = React.useState(false);
  const [openReport, setOpenReport] = React.useState(false);
  const [openCommi, setOpenCommi] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickReq = () => {
    setOpenReq(!openReq);
    setOpenRecpt(false);
    setOpenPlan(false);
    setOpenPerfReg(false);
    setOpenReport(false);
    setOpenCommi(false);
  };

  const handleClickRecpt = () => {
    setOpenReq(false);
    setOpenRecpt(!openRecpt);
    setOpenPlan(false);
    setOpenPerfReg(false);
    setOpenReport(false);
    setOpenCommi(false);
  };

  const handleClickPlan = () => {
    setOpenReq(false);
    setOpenRecpt(false);
    setOpenPlan(!openPlan);
    setOpenPerfReg(false);
    setOpenReport(false);
    setOpenCommi(false);
  };

  const handleClickPerfReg = () => {
    setOpenReq(false);
    setOpenRecpt(false);
    setOpenPlan(false);
    setOpenPerfReg(!openPerfReg);
    setOpenReport(false);
    setOpenCommi(false);
  };

  const handleClickReport = () => {
    setOpenReq(false);
    setOpenRecpt(false);
    setOpenPlan(false);
    setOpenPerfReg(false);
    setOpenReport(!openReport);
    setOpenCommi(false);
  };

  const handleClickCommi = () => {
    setOpenReq(false);
    setOpenRecpt(false);
    setOpenPlan(false);
    setOpenPerfReg(false);
    setOpenReport(false);
    setOpenCommi(!openCommi);
  };


  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <ElevationScroll {...props}>
          <AppBar>
            <Toolbar>

              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleDrawerOpen}
              >
                <MenuIcon />
              </IconButton>
              
              <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
                ETELAB
              </Typography>

              <div>
                <Tooltip title="홍길동" placement="bottom-start" arrow>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                </Tooltip>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={handleMenuClose}>프로필</MenuItem>
                  <MenuItem onClick={handleMenuClose}>로그아웃</MenuItem>
                </Menu>
              </div>
                
            </Toolbar>
          </AppBar>
        </ElevationScroll>
      </React.Fragment>
      <Drawer open={isDrawerOpen} onClose={handleDrawerClose}>
        <List
          sx={{ width: '100%', minWidth: 260, bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              메뉴 리스트
            </ListSubheader>
          }
        >
          <Divider />
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="시험의뢰관리" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Divider />
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} onClick={handleClickReq}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="의뢰요청" />
                {openReq ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Divider light />
              <Collapse in={openReq} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 6 }} onClick={()=>{navigate('/contentReqAll');setIsDrawerOpen(false);}}>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="전체목록" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="의뢰요청" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="의뢰진행" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="의뢰완료" />
                  </ListItemButton>
                  <Divider light />
                </List>
              </Collapse>
            </List>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} onClick={handleClickRecpt}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="의뢰접수" />
                {openRecpt ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Divider light />
              <Collapse in={openRecpt} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="전체목록" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="접수대기" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="접수진행" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="접수완료" />
                  </ListItemButton>
                  <Divider light />
                </List>
              </Collapse>
            </List>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} onClick={handleClickPlan}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="계획수립" />
                {openPlan ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Divider light />
              <Collapse in={openPlan} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="전체목록" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="계획수립대기" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="계획수립진행" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="계획수립완료" />
                  </ListItemButton>
                  <Divider light />
                </List>
              </Collapse>
            </List>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} onClick={handleClickPerfReg}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="실적등록" />
                {openPerfReg ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Divider light />
              <Collapse in={openPerfReg} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="전체목록" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="실적등록대기" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="실적등록진행" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="실적등록완료" />
                  </ListItemButton>
                  <Divider light />
                </List>
              </Collapse>
            </List>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} onClick={handleClickReport}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="보고서" />
                {openReport ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Divider light />
              <Collapse in={openReport} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="전체목록" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="보고서등록대기" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="보고서등록진행" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="보고서등록완료" />
                  </ListItemButton>
                  <Divider light />
                </List>
              </Collapse>
            </List>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} onClick={handleClickCommi}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="의뢰완료" />
                {openCommi ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Divider light />
              <Collapse in={openCommi} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="전체목록" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="시작목록" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="완료목록" />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </Collapse>
        </List>
      </Drawer>   
    </>
  );
}