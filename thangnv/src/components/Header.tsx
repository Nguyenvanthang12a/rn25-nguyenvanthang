import React from "react";

type Props = {
  checkLogin: boolean;
};

function Header(props: Props) {
  return (
    <>
      <header id="header">
        <button>{props.checkLogin ? "Login" : "Logout"}</button>
      </header>
    </>
  );
}

export default Header;
