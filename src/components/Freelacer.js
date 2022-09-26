import React, { useState } from "react";

export const Freelacer = ({ create_request }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  //   const [date, setDate] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    // create_request(title, amount);
    const freelancerData = {
      title: title,
      amount: amount,
    };
    create_request(freelancerData.title, freelancerData.amount);
    console.log(freelancerData);
    setTitle("");
    setAmount("");
  };
  return (
    <div>
      <h1>Freelancer New Request</h1>
      <form onSubmit={submitHandler}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={titleChangeHandler}
        />
        <label>Amount</label>
        <input
          type="number"
          name="date"
          value={amount}
          onChange={amountChangeHandler}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
