/*import React, { useState } from "react";
import axios from "axios";
import Box from "../../components/mypage/Box";
axios.defaults.baseURL = "http://34.64.93.115";
let token = localStorage.getItem("token");
if (token) token = token.replace(/\"/gi, "");
axios.defaults.headers.common["Authorization"] = `${token}`;
const BoxForm = () => {
  const props = null;
  console.log(props);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [period, setPeriod] = useState("");
  const [top3, setTop3] = useState("");
  const [totalprice, setTotalprice] = useState(0);
  const [rating, setRating] = useState("");
  const [box, setBox] = useState([]);
  props.box.filter((element) => {
    console.log(element.planTitle);
  });
  return (
    <Box
      error={image}
        type="box"
      image={image}
      title={title}
      tag={tag}
      period={period}
      top3={top3}
      totalPrice={totalprice}
      rating={rating}
    ></Box>
  );
};
export default BoxForm;
*/
