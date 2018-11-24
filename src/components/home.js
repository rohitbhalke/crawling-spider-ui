import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ReactHighcharts from 'react-highcharts';

import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HeaderComponent from './header.js'


import DrawerComponent from '/Users/rohit/Documents/Study/IR/Projects/fourth/crawling-spider-UI/src/components/drawerComponent.js'

export default class AccountControlContainer extends Component {

    render(){
    const classes = this.props;
      var config = {
      chart: {
          type: 'column'
         },
        xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        series: [{
          data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
        }],
        plotOptions: {
            series: {
                cursor: 'pointer',
                point: {
                    events: {
                        click: function () {
                            console.log('X: ' + this.x + ', Y: ' + this.y);
                            //call function passing this values as arguments
                        }
                    }
                }
            }
        },
      };
        return(
            <div styles = {{marginTop : 200}}>
                {/*<ReactHighcharts config = {config}></ReactHighcharts>
                <h1> Hello There </h1>*/}
                <div id="rohit">
                     <DrawerComponent/>
                      <main className={classes.content}>
                             <ReactHighcharts config = {config}></ReactHighcharts>
                      </main>
                  </div>
            </div>
        )
    }
}