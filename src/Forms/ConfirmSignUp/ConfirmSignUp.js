import React, { Component } from 'react';
import Input from '../Input/Input';
import {Auth} from "aws-amplify/lib/index";
import Alert from '../../UI/Alert/Alert';
import RequestNewConfirmationButton from '../../components/Authentication/RequestNewConfirmationButton/RequestNewConfirmationButton';


class ConfirmSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitButtonText: 'Confirm email',
      isFormValid: false,
      formAlerts: [],
      formData: [
        {
          camelCaseLabel: "email",
          elementType: 'input',
          label: "Email",
          elementConfig: {
            type: "email",
          },
          value: '',
          validation: {
            required: true
          },
          validationMessages: [],
          isValid: false,
          touched: false
        },
        {
          camelCaseLabel: "confirmationCode",
          elementType: 'input',
          label: "Confirmation Code",
          elementConfig: {
            type: "text",
          },
          value: '',
          validation: {
            required: true
          },
          validationMessages: [],
          isValid: false,
          touched: false
        }
      ]
    }
  }

  onCloseAlert = (alertText) => {
    const copyFormAlerts = [...this.state.formAlerts];
    const indexToRemove = copyFormAlerts.findIndex(a => a.text === alertText);
    copyFormAlerts.splice(indexToRemove, 1);
    this.setState({ formAlerts: copyFormAlerts })
  };

  checkValidity = (value, rules) => {
    let isValid = true;
    const validationMessages = [];

    if (rules.required) {
      isValid = value.trim() !== '';
      if (!isValid) validationMessages.push('Required');
    }
    if (typeof rules.maxLength !== "undefined" && isValid) {
      isValid = value.length <= rules.maxLength;
      if (!isValid) validationMessages.push(`Maximum of ${rules.maxLength} characters.`);
    }

    return {isValid, validationMessages};
  };

  zipFormData = () => {
    return {
      username: this.state.formData.find(field => field.label === 'Email').value,
      code: this.state.formData.find(field => field.label === 'Confirmation Code').value,
    };
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    const formData = this.zipFormData();
    Auth.confirmSignUp(formData.username, formData.code)
      .then(data => {
        const formAlerts = [{type: 'success', text: 'Verification successful.'}];
        this.setState({ formAlerts })
      })
      .catch(err => {
        console.log(err);
        const formAlerts = [{type: 'danger', text: err.message}];
        if (err.name === 'ExpiredCodeException') {
          formAlerts.push({
            type: 'info',
            text: <RequestNewConfirmationButton username={formData.username}/>})
        }
        this.setState({ formAlerts })
      });
  };

  inputChangeHandler = (formDataIndex, value) => {
    const formDataCopy = [...this.state.formData];
    const elementCopy = {...this.state.formData[formDataIndex]};
    const validityResults = this.checkValidity(value, elementCopy.validation);
    elementCopy.isValid = validityResults.isValid;
    elementCopy.validationMessages = validityResults.validationMessages;
    elementCopy.value = value;
    elementCopy.touched = true;
    formDataCopy[formDataIndex] = elementCopy;

    const isFormValid = formDataCopy.every(element => element.isValid);

    this.setState({formData: formDataCopy, isFormValid: isFormValid});
  };

  render () {
    return (
      <div className={"card-body"}>
        {this.state.formAlerts.map(formAlert => {
          return (
            <Alert
              alertType={formAlert.type}
              key={formAlert.text}
              onCloseAlert={() => this.onCloseAlert(formAlert.text)}>
              {formAlert.text}
            </Alert>
          )
        })}
        <form>
          {this.state.formData.map((attrs, index) => <Input key={index} index={index} {...attrs} change={this.inputChangeHandler}/>)}
          <button type={"button"} className={"btn btn-success"} onClick={this.onSubmitHandler} disabled={!this.state.isFormValid}>
            {this.state.submitButtonText}
          </button>
        </form>
      </div>
    )
  }
}


export default ConfirmSignUp;