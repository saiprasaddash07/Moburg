import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) =>(
    <ul className={classes.NavigationItems}>
        {/* <NavigationItem link="/" active={true}>Burger Builder</NavigationItem> */}
        {/* <NavigationItem link="/">Checkout</NavigationItem> */}

        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        <NavigationItem link="/orders">Order</NavigationItem>
    </ul>
);

export default navigationItems;