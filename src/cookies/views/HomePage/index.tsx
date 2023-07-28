import Cookies from "js-cookie";
import React from "react";
import { Link } from "react-router-dom";
import {useStore} from "../../store/user.store"

export default function HomePage() {
  const user = useStore((state) => state.user)
  const setUser = useStore((state) => state.setUser)

  const token = Cookies.get("token");

  if (!token) {
    return <Link to={"/signin"} />;
  }

  const handleSignOut = () => {
    setUser('null')
  }
  return (
    <>
    <div>Welcome {user}!</div>
    <button onClick={handleSignOut}></button>
    </>
    );
}
