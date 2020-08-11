import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux';

const withErrorHandler = (WrappedComponent,axios) => {
    return class extends Component {
        state ={
            error:null
        }

        // componentDidMount(){
        //     axios.interceptors.request.use(req => {
        //         this.setState({error:null});
        //         return req;
        //     })
        //     axios.interceptors.response.use(res => res,error=>{
        //         this.setState({error:error});
        //     })
        // }

        //HERE THE ISSUE IS WE ARE NOT GETTING THE MODAL IF WE CHANGE THE INGREDIENTS URL IN BURGERBUILDER METHOD
        //THIS IS HAPPENING BCOZ COMPONENTDIDMOUNT RUNS AFTER ALL THE CHILD COMPONENT HAVE BEEN RENDERED
        //IT MEANS AFTER THE  <WrappedComponent {...this.props}/> COMPONENT RUNS
        //WE CAN FIX THIS BY USING COMPONENTWILLMOUNT AS IT RUNS BEFORE ALL THE CHILD COMPONENT HAVE BEEN RENDERED

        componentWillMount(){
            this.reqInterceptors = axios.interceptors.request.use(req => {
                this.setState({error:null});
                return req;
            });
            this.resInterceptors = axios.interceptors.response.use(res => res,error=>{
                this.setState({error:error});
            });
        }

        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterceptors);
            axios.interceptors.response.eject(this.resInterceptors);
        }

        errorConfirmedHandler = () => {
            this.setState({error:null});
        }

        render(){
            return (<Aux>
                <Modal 
                    show={this.state.error}
                    modalClosed={this.errorConfirmedHandler}>
                    {this.state.error ? this.state.error.message : null}
                </Modal>
                <WrappedComponent {...this.props}/>
            </Aux>)
        }
    }
}

export default withErrorHandler;
