import React from 'react';
import css from './Log.module.css';


const log = ({ log, change }) => {
  return (
    <div className={"form-row"}>
      <div className={"col-mid-4 mb-3"}>
        <img src={'https://vignette.wikia.nocookie.net/2007scape/images/a/ac/Magic_logs_detail_animated.gif/revision/latest?cb=20180205042632'}
               alt={log.name} className={css.Log}/>
      </div>
      <div className={"col-mid-4 mb-3"}>
        <input value={log.count} className={"form-control is-valid"} onChange={(event) => change(event, log.name)}/>
      </div>
    </div>
  );
};


export default log;