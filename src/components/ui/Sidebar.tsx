import type { ReactElement } from 'react';

import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';

type MenuProps = {
  text: string;
  icon: ReactElement;
};

const menuItems: MenuProps[] = [
  { text: 'Inbox', icon: <InboxOutlinedIcon /> },
  { text: 'Inbox', icon: <InboxOutlinedIcon /> },
];

export const Sidebar = () => {
  return (
    <Drawer anchor="left" open onClose={() => {}}>
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
