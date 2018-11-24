import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Autosuggest from 'react-autosuggest'



const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
    marginLeft: 200,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
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
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
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
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});

const languages = [
  {
    name: 'C',
    year: 1972
  },
  {
    name: 'C#',
    year: 2000
  },
  {
    name: 'C++',
    year: 1983
  },
  {
    name: 'Clojure',
    year: 2007
  },
  {
    name: 'Elm',
    year: 2012
  },
  {
    name: 'Go',
    year: 2009
  },
  {
    name: 'Haskell',
    year: 1990
  },
  {
    name: 'Java',
    year: 1995
  },
  {
    name: 'Javascript',
    year: 1995
  },
  {
    name: 'Perl',
    year: 1987
  },
  {
    name: 'PHP',
    year: 1995
  },
  {
    name: 'Python',
    year: 1991
  },
  {
    name: 'Ruby',
    year: 1995
  },
  {
    name: 'Scala',
    year: 2003
  }
];

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  return languages.filter(language => regex.test(language.name));
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.name}</span>
  );
}

export default class AccountControlContainer extends Component {

            constructor(){
    		    super();
    		    this.props = styles;
    		    this.state = {
    		        value : '',
    		        suggestions : []
    		    }
    		   }

    		   onChange = (event, { newValue, method }) => {
                   this.setState({
                     value: newValue
                   });
                 };

                 onSuggestionsFetchRequested = ({ value }) => {
                   this.setState({
                     suggestions: getSuggestions(value)
                   });
                 };

                 onSuggestionsClearRequested = () => {
                   this.setState({
                     suggestions: []
                   });
                 };





render(){
        const classes = this.props;
        const { value, suggestions } = this.state;
        const inputProps = {
              placeholder: "Search tweet",
              value : this.state.value,
              onChange: this.onChange
            };
        return(
        <div className={classes.root}>
              <AppBar position="static">
                <Toolbar>
                  {/*<IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
                    <MenuIcon />
                  </IconButton>*/}
                  <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                    Crawling Spyders
                  </Typography>
                  <div className={classes.grow} />
                    {/*<InputBase autoComplete style={{ marginLeft: 200}}
                      placeholder="Search…"
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                    />*/}
                    <div style={{ marginLeft: 200, color: 'gray'}}>
                    <Autosuggest  suggestions={suggestions}
                                      onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                                      onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                                      getSuggestionValue={getSuggestionValue}
                                      renderSuggestion={renderSuggestion}
                                      inputProps={inputProps}
                                    />
                    </div>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                          <SearchIcon />
                    </div>
                  </div>
                </Toolbar>
              </AppBar>

            </div>
        )
    }
}