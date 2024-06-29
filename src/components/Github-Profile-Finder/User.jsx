import React from "react";

function User({ user }) {
  const {
    avatar_url,
    created_at,
    followers,
    following,
    public_repos,
    name,
    html_url,
  } = user;

  const createdDate = new Date(created_at);
  console.log(followers);
  return (
    <>
      <div className="img-container">
        <a href={html_url}>
          <img src={avatar_url} alt="" className="avatar" />
          <br />
          <span className="profile-name">{name}</span>
        </a>
      </div>
      <div className="user-data">
        <div className="ceation-date">
          <p>
            <span className="profile-name">
              <a href={html_url} target="_blank" rel="noopener noreferrer">
                {" "}
                {name}
              </a>
            </span>{" "}
            Joined githun on {createdDate.getDate()}{" "}
            {createdDate.toLocaleString("en-us", { month: "short" })}{" "}
            {createdDate.getFullYear()}
          </p>
        </div>
        <div className="public-repos">
          <p style={{ fontWeight: "bolder" }}>Public Repos</p>
          <p>{public_repos}</p>
        </div>
        <div className="followers">
          <p style={{ fontWeight: "bolder" }}>Followers</p>
          <p>{followers}</p>
        </div>
        <div className="following">
          <p style={{ fontWeight: "bolder" }}>Following</p>
          <p>{following}</p>
        </div>
      </div>
    </>
  );
}

export default User;
