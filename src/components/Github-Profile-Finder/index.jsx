import React, { useEffect, useState } from "react";
import User from "./User";
import "./styles.css";

function GithubProfileFinder() {
  const [userName, setUserName] = useState("BahaaAhmed1990");
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLaoding] = useState(false);
  const [err, setErr] = useState("");

  async function fetchUser() {
    try {
      setLaoding(true);
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const user = await response.json();
      if (user) {
        setUserProfile(user);
        setLaoding(false);
      }
      console.log(user);
    } catch (error) {
      console.log(error);
      setErr(error);
      setLaoding(false);
    }
  }
  function handleClick() {
    fetchUser();
  }

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (err) {
    return (
      <div>
        Oops ! <br />
        {err.message}
      </div>
    );
  }
  console.log(userProfile);
  return (
    <div className="github-profile-container">
      <div className="search-container">
        <input
          type="text"
          name="search-profile"
          placeholder="Enter a name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleClick} className="search-btn">
          Search
        </button>
      </div>
      <div className="user-container">
        {userProfile !== null ? <User user={userProfile} /> : null}
      </div>
    </div>
  );
}

export default GithubProfileFinder;
