import React from "react";

export const Clients = ({ data }) => {
  return (
    <div id="clients" className="clients">
      <div className="container">
        <div className="section-title text-center">
          <h2>Nuestros Clientes</h2>
        </div>
        <div className="row d-flex flex-wrap justify-content-center align-items-center">
          {data
            ? data.map((client, index) => (
                <div key={`${client.name}-${index}`} className="col-md-2 d-flex justify-content-center align-items-center">
                  <div className="client">
                    <div className="client-image">
                      <img
                        src={`/img/${client.img}.jpg`}
                        alt={client.name}
                        className="img-fluid"
                        style={{ height: "150px", width: "150px", objectFit: "contain" }}
                      />
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
