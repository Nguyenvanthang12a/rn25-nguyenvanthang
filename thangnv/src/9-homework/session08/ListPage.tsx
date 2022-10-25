import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { string } from "yup";
interface Iuser {
  id: string;
  name: string;
}
function ListPage() {
  const navi = useNavigate();
  const [user, setUser] = useState<Array<Iuser>>([]);
  useEffect(() => {
    getListUserAPI();
  }, []);
  const getListUserAPI = () => {
    const url = "https://63528f81a9f3f34c374166f0.mockapi.io/users";
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        setUser(json);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const gotoForm = () => {
    navi("Form/");
  };
  const gotoFormUpdate = (id: string) => {
    navi("FormUpdate/" + id);
  };
  const gotoDetail = (id: string) => {
    console.log(id);
    navi("DetailPage/" + id);
  };
  const handleDelete = (id: string) => {
    console.log("delete", id);
    const url = "https://63528f81a9f3f34c374166f0.mockapi.io/users/" + id;
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("delete success", json);
        getListUserAPI();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <table className="table table-success table-striped mt-2">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Work</th>
        </tr>
      </thead>
      <tbody>
        {user?.map((user: Iuser) => (
          <tr key={user.id}>
            <th scope="row">{user.id}</th>
            <td>{user.name}</td>
            <td>
              <button
                type="button"
                className="btn btn-success"
                onClick={() => gotoDetail(user.id)}
              >
                Detail
              </button>
              <button
                style={{ marginLeft: "10px" }}
                type="button"
                className="btn btn-danger"
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </button>
              <button
                style={{ marginLeft: "10px" }}
                type="button"
                className="btn btn-primary"
                onClick={() => gotoForm()}
              >
                Post
              </button>
              <button
                style={{ marginLeft: "10px" }}
                type="button"
                className="btn btn-info"
                onClick={() => gotoFormUpdate(user.id)}
              >
                Update
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ListPage;
