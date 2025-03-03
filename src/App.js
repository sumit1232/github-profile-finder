import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import UserProfile from "./components/UserProfile";
import './App.css';

function App() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  const fetchGitHubUser = async (username) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data);
      setError("");
    } catch (err) {
      setError("User not found");
      setUserData(null);
    }
  };

  return (
    <div>
      <h1>GitHub Profile Finder</h1>
      <SearchBar onSearch={fetchGitHubUser} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {userData && <UserProfile user={userData} />}
    </div>
  );
}

export default App;
