import { useContext, type ReactElement } from 'react';

import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';

import { UIContext } from '@/context/ui';

type MenuProps = {
  text: string;
  icon: ReactElement;
};

const menuItems: MenuProps[] = [
  { text: 'Inbox', icon: <InboxOutlinedIcon /> },
  { text: 'Starred', icon: <StarHalfOutlinedIcon /> },
  { text: 'Send email', icon: <EmailOutlinedIcon /> },
  { text: 'Drafts', icon: <DraftsOutlinedIcon /> },
];

export const Sidebar = () => {
  const { sideMenuOpen, closeSideMenu } = useContext(UIContext);

  return (
    <Drawer anchor="left" open={sideMenuOpen} onClose={closeSideMenu}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: '5px 10px' }}>
          <Typography variant="h4">Menú</Typography>
        </Box>

        <List>
          {menuItems.map((item) => {
            return (
              <ListItem key={item.text}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemButton>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
};
