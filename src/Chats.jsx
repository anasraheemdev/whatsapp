import React from "react";

const Chats = ({name,desc,time,messages,img,id}) => {
  return (
    <>
      <div
        className="container-fluid d-flex align-items-center w-100 chats"
        style={{ backgroundColor: "#212529" }}
      >
        <div className="card bg-transparent border-0 text-white w-100">
          <div className="card-body d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <div className="rounded-circle avatar mx-2">
                <img
                  width={50}
                  height={50}
                  src={img}
                  alt={name}
                  className="rounded-circle imege"
                />
              </div>
              <div>
                <h5 className="card-title mb-0">{name}</h5>
                <p className="card-text">{desc}</p>
              </div>
            </div>
            <div>
              <span className="badge badge-primary">{time}</span>
              <div className="d-flex gap-1">
                <div className="rounded-circle bg-success w-50 h-50">
                  <span className="badge badge-success ml-2 ">{messages}</span>
                </div>
                <div className="rounded-circle bg-success w-50 h-50">
                  <span className="badge badge-success ml-2 ">
                    <i class="bi bi-pin-angle-fill"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chats;
