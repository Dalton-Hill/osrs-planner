import React from 'react';
import { Auth } from 'aws-amplify';


const requestNewConfirmationButton = props => {
  return (
    <button
      className={'btn btn-outline-primary'}
      onClick={() => Auth.resendSignUp(props.username)}
    >
      Request a code
    </button>
  )
};


export default requestNewConfirmationButton;