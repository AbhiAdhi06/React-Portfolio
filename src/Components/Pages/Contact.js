import Menu from "./Menu";
// import axios from "axios";
import { useState } from "react";
import swal from "sweetalert";

const Contact = () => {
  // With Firebase RealTime Database

  // Database Link: https://abhitech190-default-rtdb.firebaseio.com/

  const [userData, setUserData] = useState({
    userName: "",
    userPhone: "",
    userEmail: "",
    userReview: "",
  });
  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };

  // Connect With Firebase Database

  const { userName, userPhone, userEmail, userReview } = userData;

  const submitData = async (event) => {
    event.preventDefault();
    const res = await fetch(
      "https://abhitech190-default-rtdb.firebaseio.com/userDataRecords.json",
      {
        method: "POST",
        Headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName,
          userPhone,
          userEmail,
          userReview,
        }),
      }
    );
    if (res) {
      setUserData({
        userName: "",
        userPhone: "",
        userEmail: "",
        userReview: "",
      });
      swal({
        type: "success",
        message: "Your Review Has Been Recorded",
        icon: "success"
      });
    } else {
      alert("Fill The Data");
    }
  };
  // With Nods Js/Express

  /* const [name, setName] = useState("");
  const [review, setReview] = useState("");
  async function postName(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8989/postname", {
        name,
        review
      });
    } catch (error) {
      console.log("error in connection");
    }
  } */

  return (
    <>
      <Menu />
      <div>
        <form className="form" onSubmit={postUserData} method="POST">
          <input
            type="text"
            name="userName"
            id="name"
            /* onChange={(e) => {
              setName(e.target.value);
            }} */
            onChange={postUserData}
            required
            placeholder="Enter Your Name"
            value={userData.userName}
          />
          <input
            type="number"
            name="userPhone"
            id="phone"
            placeholder="Enter Mobile Number"
            value={userData.userPhone}
            onChange={postUserData}
          />
          <input
            type="email"
            name="userEmail"
            id="email"
            placeholder="Enter Your Email"
            value={userData.userEmail}
            onChange={postUserData}
          />
          <textarea
            type="text"
            name="userReview"
            id="area"
            rows={20}
            cols={30}
            onChange={postUserData}
            // onChange={(e) => {
            //   setReview(e.target.value);
            // }}
            placeholder="Enter Your Review"
            value={userData.userReview}
          />
          <input
            id="submit"
            type="submit"
            value="Submit"
            onClick={submitData}
          />
        </form>
      </div>
    </>
  );
};

export default Contact;
