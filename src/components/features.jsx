import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center mb-5">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title mt-5 ">
          <h2>Que nos define? </h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
