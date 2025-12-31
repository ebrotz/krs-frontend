import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export function Button() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const onClickHandler: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const closeHandler = () => {
        setAnchorEl(null)
    }

    // TODO Go to user page
    const myAccountHandler = () => {
        setAnchorEl(null)
    }

    // TODO Handle logout
    const logoutHandler = () => {
        setAnchorEl(null)
    }

    return (
        <div>
            <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={undefined}
                aria-haspopup="true"
                onClick={onClickHandler}
                color="inherit"
                >
                <AccountCircle />
            </IconButton>
            <Menu anchorEl={anchorEl} open={open} onClose={closeHandler}>
                <MenuItem onClick={myAccountHandler}>My Account</MenuItem>
                <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </Menu>
        </div>
    );
}
