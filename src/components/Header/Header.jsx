import { AppBar, Toolbar, Typography, Button, IconButton, AccordionActions, Accordion, AccordionSummary  } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../bentleyretaillogo.svg';



const Header = () => {

    const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    header: {
      justifyContent: 'space-between'
    }
  }));

  const classes = useStyles();

    return (
       
            <AppBar position='static'>
                <Toolbar className={classes.header}>
                  <IconButton
                    size='medium'
                    edge='start'
            color='inherit'
            aria-label='menu'>
            
            <MenuIcon/>
            
                  </IconButton>
                    <div>
                     <img src={logo} className='App-logo'  alt="logo" />
                    </div>
                    <div>
                      <Button color='inherit' component={Link} to={'/login'}>Login</Button>
                      <Button color='inherit' component={Link} to={'/signup'}>Sign Up</Button>
                      <Button color='inherit' component={Link} to={'/store'}>Store</Button> 
                    </div>
                </Toolbar>
            </AppBar>
        
        
    )
}

export default Header