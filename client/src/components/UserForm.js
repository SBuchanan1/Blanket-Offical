import React, { Component } from 'react'

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: '',
    }
    // proceeding to the next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });

    }
    //  got back to previos state
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    // Handle fields change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}

export default UderForm