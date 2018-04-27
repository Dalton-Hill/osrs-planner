import React from 'react';
import css from './Log.module.css';


const log = ({ log, change }) => {
  const isCountValid = !isNaN(parseInt(log.count, 10));
  const experienceGained = isCountValid ? parseInt(log.count, 10) * log.woodcutting_xp : 0;
  return (
    <div className={["form-row", css["log-row"]].join(' ')}>
      <div className={"col-mid-3 mb-3"}>
        <img src={log.image_url} alt={log.name} className={css["log-image"]}/>
      </div>
      <div className={"col-mid-3 mb-3"}>
        <p>{log.name}</p>
      </div>
      <div className={"col-mid-3 mb-3"}>
        <label>Count Chopped</label>
        <input value={log.count} className={"form-control"}
               onChange={(event) => change(event, log.name)}/>
      </div>
      <div className={"col-mid-3 mb-3"}>
        <label>Experience Gained</label>
        <input className={"form-control"} readOnly={true} value={experienceGained}/>
      </div>
    </div>
  );
};


export default log;