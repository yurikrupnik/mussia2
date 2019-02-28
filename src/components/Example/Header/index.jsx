import React from 'react';
import PropTypes from 'prop-types';
import {AppBar, Toolbar, Typography, InputBase} from '@material-ui/core';
import {fade} from '@material-ui/core/styles/colorManipulator';
import {withStyles} from '@material-ui/core/styles';
import MoviesProvider from "../../../api/movies/context/provider";

const styles = theme => ({
    root: {
        width: '100%',
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit * 3,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
});

const PrimarySearchAppBara = React.memo(function (props) {
    const {classes, onChange, value, title} = props;
    console.log('PrimarySearchAppBar rebder');

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                        {title} Example
                    </Typography>
                    <div className={classes.search}>
                        <InputBase
                            placeholder="Search…"
                            value={value}
                            classes={{root: classes.inputRoot, input: classes.inputInput}}
                            onChange={onChange}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}, (prevProps, nextProps) => {
    if (nextProps.value !== prevProps.value) {
        return false;
    }
    return true;
});

class PrimarySearchAppBar extends React.Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (nextProps.value !== this.props.value) {
            // console.log('value');
            return true;
        }
        // if (nextProps.title !== this.props.title) {
        //     console.log('title');
        //     return true;
        // }
        // if (nextProps.onChange !== this.props.onChange) {
        //     console.log('onChange');
        //     return true;
        // }
        // if (nextProps.classes !== this.props.classes) {
        //     console.log('classes');
        //     return true;
        // }
        return false;
    }

    render() {
        const {classes, onChange, value, title} = this.props;
        console.log('PrimarySearchAppBar rebder');

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                            {title} Example
                        </Typography>
                        <div className={classes.search}>
                            <InputBase
                                placeholder="Search…"
                                value={value}
                                classes={{root: classes.inputRoot, input: classes.inputInput}}
                                onChange={onChange}
                            />
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}


PrimarySearchAppBar.defaultProps = {
    title: ''
};

PrimarySearchAppBar.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    classes: PropTypes.shape({}).isRequired,
    title: PropTypes.string
};

export default withStyles(styles)(PrimarySearchAppBara);
