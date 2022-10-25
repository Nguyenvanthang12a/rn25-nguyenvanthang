import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Iuser {
  id: string;
  name: string;
}
function Detail() {
  let params = useParams();
  const [stateUser, setStateUser] = useState<Iuser>({ name: "", id: "" });
  useEffect(() => {
    getUserAPI();
  }, []);
  const getUserAPI = () => {
    const url =
      "https://63528f81a9f3f34c374166f0.mockapi.io/users/" + params.id;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setStateUser(json);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <p>ID Iuser : {stateUser.id}</p>
      <p>Name Iuser : {stateUser.name}</p>
    </div>
  );
}

export default Detail;
