import React from "react";
import { Data } from "./data";
import Chats from "./chats";
import Side from "./side";

const Mobile = () => {
  return (
    <>
      <div class="p-0 m-0">
        <div class="container-fluid bg-dark p-0 m-0 vh-100 overflow-hidden">
          <div class="row h-100  g-0">
            <div class="col-lg-4 position-relative">
              <div className="ppf d-flex justify-content-between p-3">
                <div className="ppf-img">
                  <img
                    width={50} height={50}
                    className="rounded-circle "
                    src="https://media.licdn.com/dms/image/v2/D4D03AQEflfDxWIQJuA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1713264864535?e=2147483647&v=beta&t=D88Lc9dIIHHIqT4CGH6Umlh7gEz9L6sdw-h3Jg4kRRY"
                    alt=""
                    srcset=""
                  />
                </div>

                <div className="d-flex icons justify-content-center align-items-center gap-3 ">
                  <div className="moon">
                    <i class="bi bi-moon-fill"></i>
                  </div>
                  <div className="story">
                    <i class="bi bi-clock-history"></i>
                  </div>
                  <div className="message">
                    <i class="bi bi-chat-left-text-fill"></i>
                  </div>
                  <div className="dots">
                    <i class="bi bi-three-dots-vertical"></i>
                  </div>
                </div>
              </div>

              <div class="input search p-2">
                <div class="input-group form-bg">
                  <span class="input-group-text bg-transparent border-0 text-muted">
                    <i class="bi bi-search"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control bg-transparent border-0 text-light input-cl"
                    placeholder="Search or start a new chat"
                  />
                </div>
              </div>

              <div className="container-fluid vh-100 red-container px-0">
                <div className="red-content p-0 ">
                  {/*  Scrollable content here*/}
                  {
                    Data.map((item,index)=>{
                      return (<Chats {...item}/>)
                    })
                  }
                </div>
              </div>
            </div>

            <div class="col-lg-8 bgcol-2">
              <Side/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobile;
