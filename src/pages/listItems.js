import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import TodayIcon from "@mui/icons-material/Today";
import AssignmentIcon from "@mui/icons-material/Assignment";
import RestaurantSharpIcon from "@mui/icons-material/RestaurantSharp";
import DeliveryDiningSharpIcon from "@mui/icons-material/DeliveryDiningSharp";
import MicSharpIcon from "@mui/icons-material/MicSharp";
import SettingsSharpIcon from "@mui/icons-material/SettingsSharp";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <SpaceDashboardOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <TodayIcon />
      </ListItemIcon>
      <ListItemText primary="Calendar" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <DeliveryDiningSharpIcon />
      </ListItemIcon>
      <ListItemText primary="Drivers" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <RestaurantSharpIcon />
      </ListItemIcon>
      <ListItemText primary="Restaurants" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <MicSharpIcon />
      </ListItemIcon>
      <ListItemText primary="Assistant" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <SettingsSharpIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItemButton>
  </React.Fragment>
);

export const infoList = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <InfoOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="About" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ShareOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Share" />
    </ListItemButton>
  </React.Fragment>
);

export const otherList = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <CollectionsOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="App Gallery" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);
