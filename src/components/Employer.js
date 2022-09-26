import React, { useState } from "react";

export const Employer = ({ details }) => {
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  //   const [date, setDate] = useState("");

  const addressChangeHandler = (e) => {
    setAddress(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const employerData = {
      address: address,
      date: new Date(date),
    };

    const myPromise = new Promise((resolve, reject) => {
      resolve(employerData.date);
    });
    myPromise.then((res) => console.log(res));
    await details.deadline(employerData.date);
    console.log(details.deadline);
    //await details.address(employerData.address);
    setAddress("");
    setDate("");
  };
  return (
    <div>
      <h1>Employer New Request</h1>
      <form onSubmit={submitHandler}>
        <label>Address</label>
        <input
          type="text"
          name="address"
          value={address}
          onChange={addressChangeHandler}
        />
        <label>Date</label>
        <input
          type="date"
          name="date"
          value={date}
          onChange={dateChangeHandler}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
