import React from 'react';


const TextArea = (props) => <textarea {...props}/>;


const input = (props) => {
  const inputElId = props.label + props.elementType;
  const htmlHelpId = inputElId + "Help";
  let inputAttributes = {id: inputElId, "aria-describedby": htmlHelpId, onChange: props.onChange};
  let msgAttributes = {id: htmlHelpId};
  let CustomInputElement = false;

  const inputClasses = ["form-control"];
  const msgClasses = [];
  if (!props.isValid && props.touched) {
    inputClasses.push('is-invalid');
    msgClasses.push('invalid-feedback');
  }

  inputAttributes.className = inputClasses.join(' ');
  msgAttributes.className = msgClasses.join(' ');

  switch (props.elementType) {
    case ('time'):
      inputAttributes = {
        ...inputAttributes,
        ...props.elementConfig,
        value: props.value,
        onChange: (event) => props.change(props.index, event.target.value)
      };
        break;

    case ('textarea'):
      inputAttributes = {
        ...inputAttributes,
        ...props.elementConfig,
        value: props.value,
        onChange: (event) => props.change(props.index, event.target.value)
      };
      CustomInputElement = TextArea;
      break;

    default:
      inputAttributes = {
        ...inputAttributes,
        ...props.elementConfig,
        placeholder: props.label,
        value: props.value,
        onChange: (event) => props.change(props.index, event.target.value)
      };
  }

  return (
    <div className="form-group">
      <label htmlFor={inputElId}>{props.label}</label>
      {CustomInputElement ? <CustomInputElement {...inputAttributes}/> : <input {...inputAttributes}/>}
      <div {...msgAttributes}><ul>{props.validationMessages.map(msg => <li key={msg}>{msg}</li>)}</ul></div>
    </div>
  )
};

export default input;