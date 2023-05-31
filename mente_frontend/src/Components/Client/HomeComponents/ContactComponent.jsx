import React, { useState, useEffect } from "react";
import "./Contact.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { formSchema } from "../../../schema/formSchema";

const ContactComponent = () => {
  const [state, setState] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const getData = async () => {
    axios.get("http://localhost:3000/posts");
  };
  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    getData();
  };
  const addData = () => {
    if (!state.name || !state.surname || !state.email || !state.message) return;

    axios.post("http://localhost:3000/posts", state);
    getData();
    setState({
      name: "",
      surname: "",
      email: "",
      message: "",
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });
  const onSubmit = (data) => {
    addData();
  };
  return (
    <div className="contact">
      <div className="contact-wrapper">
        <h3> Əlaqə </h3>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <input
              {...register("name")}
              onChange={handleChange}
              value={state.name}
              name="name"
              id="name"
              type="text"
              className="form-control"
              placeholder="Ad"
            />
            {errors.name ? (
              <span style={{ color: "red" }}>{errors.name.message}</span>
            ) : (
              <></>
            )}
            <input
              {...register("surname")}
              onChange={handleChange}
              value={state.surname}
              name="surname"
              type="text"
              id="surname"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Soyad"
            />

            {errors.surname ? (
              <span style={{ color: "red" }}>{errors.surname.message}</span>
            ) : (
              <></>
            )}
            <input
              {...register("email")}
              onChange={handleChange}
              value={state.email}
              name="email"
              id="email"
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="E-mail"
            />
            {errors.email ? (
              <span style={{ color: "red" }}>{errors.email.message}</span>
            ) : (
              <></>
            )}
          </div>
          <textarea
            {...register("message")}
            value={state.message}
            onChange={handleChange}
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Mesajınız"
          ></textarea>
          {errors.message ? (
            <span style={{ color: "red" }} className="text-error-m">
              {errors.message.message}
            </span>
          ) : (
            <></>
          )}
          <div className="form-button">
            <button type="submit" className="btn btn-primary mt-3">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactComponent;
