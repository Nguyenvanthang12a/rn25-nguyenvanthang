import React, { useState } from "react";

type Props = {};

export default function Practive({}: Props) {
  const [text, setText] = useState("");
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("submit");
  };
  const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setText(event.target.value);
  };

  return (
    //<div>
    //  <form onSubmit={handleSubmit}>
    //  <input type="text" onChange={handleOnchange} value={text} />
    //    <input type="password" />
    //    <input type="checkbox" name="checkbox1" />
    //    < input type="submit"  />
    //  </form>
    //</div>
    <div>
      {/* <form onSubmit={handleSubmit}>
        <input
          type="Text"
          name="userName"
          placeholder="User Name"
          value={inputs.Username}
          onChange={handleChange}
        />
      </form> */}
      hello
    </div>
  );
}
