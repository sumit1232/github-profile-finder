import React from "react";

function UserProfile({ user }) {
  return (
    <div>
      <img src={user.avatar_url} alt="Avatar" style={{ width: "150px", borderRadius: "50%" }} />
      <h2>{user.name || "No Name Available"}</h2>
      <p>{user.bio || "No Bio Available"}</p>
      <p>Repositories: {user.public_repos}</p>
      <p>Followers: {user.followers}</p>
      <p>Following: {user.following}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        View Profile
      </a>
    </div>
  );
}

export default UserProfile;
