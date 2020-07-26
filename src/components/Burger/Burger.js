import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    // var y = Object.keys(props.ingredients);
    // //console.log(y);var z;
    
    //console.log(z);
    // const transformedIngredients = y.map((igKey) => (
    //     <BurgerIngredient key={igKey+props.ingredients[igKey]} type={igKey} />
    // ));

    let transformedIngredients = Object.keys(props.ingredients).map( k => {
        return [...Array(props.ingredients[k])].map((_,i)=>{
            return <BurgerIngredient key={k+i} type={k} /> ;
        }) // [x,y]
    });
    // .reduce((arr,el)=>{
    //     return arr.concat(el);
    // },[]);
    // if(transformedIngredients.length===0){
    //     transformedIngredients = <p>Please start adding ingredients!</p>
    // }

    var flag=0;
    for(var i=0;i<transformedIngredients.length;i++){
        var j = transformedIngredients[i];
        // console.log(j);
        if(j.length!==0){
            flag=1;
        } 
    }
    if(flag===0){
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;