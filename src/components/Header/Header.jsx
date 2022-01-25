import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { Typography,AppBar,Toolbar,Box, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'

import useStyles from './styles'

const Header = () => {
    const classes = useStyles()
    return(
        <div>
            <AppBar position='static'>
                <Toolbar className={classes.toolbar}>
                    <Typography variant='h5' className={classes.title}>
                        Explore World
                    </Typography>
                    <Box>
                        <Typography variant='h6' className={classes.title}>
                            Explore new places
                        </Typography>
                        {/* <Autocomplete> */}
                            <div className={classes.search}>
                                <div className={classes.seacrhIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase placeholder='Enter location' classes={{root:classes.inputRoot, input:classes.inputInput}}/>
                            </div>
                        {/* </Autocomplete> */}
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;