import { Icon } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { withStyles, WithStyles, withTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import * as PropTypes from 'prop-types';
import * as React from 'react';

const styles = {
    menuButton: {
        marginLeft: 10,
        marginRight: 20,
    },
    root: {
        flexGrow: 1,
    },
    title: {
        display: 'block',
    },
};

export interface ILogoProps extends React.SVGProps<SVGSVGElement> {

}

const Logo = (props: ILogoProps) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59 70">
        <title>Mesh One Symbol</title>
        <path d="M29.46.19,0,17.23V52.77l29.5,17,29.5-17V17.23Zm-13.36,33V50.11l-5.77-3.33V23.22L29.46,34.27l19.12-11V46.77l-5.81,3.36V33.26L29.46,40.94,16.1,33.22" />
    </svg>
)

export interface IProps extends WithStyles<typeof styles> { }

function SimpleAppBar(props: IProps) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <AppBar position="static" color="primary">

                <Toolbar>
                <Icon className={classes.menuButton}>
                    <Logo fill="#FFF" height="inherit" />
                </Icon>
                    <Typography className={classes.title} variant="h6" color="inherit" noWrap={true}>
                        Mesh Developers
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

SimpleAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

export default withTheme()(withStyles(styles)(SimpleAppBar));
