import React, { Fragment, useState } from "react";

const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    name: "",
    password: "",
  });

  const { name, password } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { name, password };
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      const parseRes = await response.json();

      localStorage.setItem("token", parseRes.token);

      setAuth(true);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <h1 className="text-center text-white font-bold my-5">Prijavi se</h1>
      <form onSubmit={onSubmitForm}>
        <input
          type="name"
          name="name"
          placeholder="Ime"
          className="form-control my-3"
          value={name}
          onChange={(e) => onChange(e)}
        />
        <input
          type="password"
          name="password"
          placeholder="Lozinka"
          className="form-control my-3"
          value={password}
          onChange={(e) => onChange(e)}
        />
        <button className="btn text-white bg-emerald-900 btn-success btn-block">
          Potvrda
        </button>
      </form>
    </>
  );
};

export default Login;
