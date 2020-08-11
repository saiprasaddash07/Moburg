import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';

import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import {withRouter} from 'react-router-dom';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {

    state = {
        name:'',
        email:'',
        address:{
            street:'',
            postalCode:''
        },
        loading:false
    }

    orderHandler = (event) => {
        event.preventDefault();
        // console.log(this.props.ingredients);
        // console.log(this.props.price);
        this.setState({loading:true});
        const order ={
            ingredients:this.props.ingredients,
            price:this.props.price,
            deliveryMethod:'fastest',
            customer:{
                name:'Sai Prasad',
                address:{
                    street:'Teststreet 1',
                    zipcode:'75004',
                    country:'India'
                },
                email:'test@test.com'
            },
        }
        axios.post('/orders.json',order)
            .then(response=> {
                this.setState({loading:false});
                this.props.history.push('/');
            })
            .catch(error=>{
                this.setState({loading:false});
            });
    }

    render() {
        let form = (
            <form>
                <Input inputtype="input" type="text" name="name" placeholder="Your Name" />
                <Input inputtype="input" type="text" name="email" placeholder="Your Email" />
                <Input inputtype="input" type="text" name="Street" placeholder="Street" />
                <Input inputtype="input" type="text" name="postal" placeholder="Postal Code" />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if(this.state.loading){
            form = <Spinner />;
        }

        return (
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default withRouter(ContactData);