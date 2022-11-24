import React from 'react';
import { Button, AppBar, Toolbar, Typography, IconButton} from '@mui/material';
import { Menu } from '@mui/icons-material';

import s from './index.module.css'

function handleConsole() {
  console.log('Есть контакт');
}

function Header() {
  return (
    <>
      <AppBar position="static">
        <Toolbar className={s.header}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Мой блог
          </Typography> 
          <Button variant="outlined" color='inherit' onClick={handleConsole}>Добавить пост</Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
