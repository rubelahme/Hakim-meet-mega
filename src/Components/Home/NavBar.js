import React from "react";
import Img from "../../Img/gmeet.gif";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="text-center">
        <h1 className="pt-2 pb-2">Google Meet</h1>
        <div className="row">
          <div className="col Img">
            <img src={Img} alt="Meta" />
          </div>
        </div>
        <h6 className="pb-3 pt-3">Google Meet Added you from your post !</h6>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-grid gap-2">
              <button
                onClick={() => navigate("/id")}
                className="btn btn-primary mt-2 mb-2"
                type="button"
              >
                Start now
              </button>
              <button
                onClick={() => navigate("/id")}
                className="btn btn-danger"
                type="button"
              >
                Leave now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
