import { Typography } from '@material-ui/core';
import { createStyles, withStyles, WithStyles, withTheme } from '@material-ui/core/styles';
import * as PropTypes from 'prop-types';
import * as React from 'react';

const styles = createStyles({
    body: {
        bottom: "50%",
        flexGrow: 1,
        position: "absolute",
        textAlign: "center",
        top: "50%",
    },
});

export interface IProps extends WithStyles<typeof styles> { }

function Body(props: IProps) {
    const { classes } = props;

    return (
        <div className={classes.body}>
                    <Typography variant="h3">
                    &nbsp;&nbsp;Coming soon...!
                    </Typography>
        </div>
    );
}

Body.propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

export default withTheme()(withStyles(styles)(Body));


