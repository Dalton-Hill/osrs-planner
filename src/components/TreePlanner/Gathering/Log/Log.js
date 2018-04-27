import React from 'react';
import css from './Log.module.css';


const log = ({ log, change }) => {
  const isCountValid = !isNaN(log.count);
  const isValidClass = isCountValid ? "is-valid" : "is-invalid";
  const feedBack = isCountValid ? null: <div className={"invalid-feedback"}>Not a number</div>;
  return (
    <div className={"form-row"}>
      <div className={"col-mid-3 mb-3"}>
        <img src={log.image_url} alt={log.name} className={css.Log}/>
      </div>
      <div className={"col-mid-3 mb-3"}>
        <p>{log.name}</p>
      </div>
      <div className={"col-mid-3 mb-3"}>
        <input value={log.count} className={["form-control", isValidClass].join(" ")}
               onChange={(event) => change(event, log.name)}/>
        {feedBack}
      </div>
    </div>
  );
};


export default log;