import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../auth/firebase";
import { FiPlus, FiMic, FiSend } from "react-icons/fi";
import annaImg from "../assets/profile.jpg";
import ProfileDropdown from "./ProfileDropdown";

// Helper to get only first name
function formatDisplayName(name) {
  if (!name) return "User";
  const nameWithoutRoll = name.replace(/ce\d{2}[a-zA-Z0-9]+/i, "");
  const parts = nameWithoutRoll.match(/[A-Z][a-z]*/g) || [];
  return parts[0] || "User";
}

const MainContent = () => {
  const [user] = useAuthState(auth);
  const userName = formatDisplayName(user?.displayName);

  return (
    <div
      style={{
        flex: 1,
        paddingLeft: "1rem",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        minHeight: "90vh"
      }}
    >
      {/* Header Row: Ask Anna logo and User Info */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2rem"
        }}
      >
        {/* Ask Anna logo + text */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <img
            src={annaImg}
            alt="Ask Anna"
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          />
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: 800,
              background: "linear-gradient(90deg, maroon, goldenrod)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              margin: 0
            }}
          >
            Ask Anna
          </h1>
        </div>

        {/* User Info aligned right */}
        {user && (
          <div style={{ display: "flex", alignItems: "center" }}>
            <span
              title={userName}
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                color: "#222",
                whiteSpace: "nowrap"
              }}
            >
              {userName}
            </span>
            <ProfileDropdown user={user} />
          </div>
        )}
      </div>

      {/* Centered Greeting */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: 800,
            background: "linear-gradient(90deg, maroon, goldenrod)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            margin: 0
          }}
        >
          Hello, {userName} 👋
        </h2>
      </div>

      {/* Input Box at bottom */}
      <div
  style={{
    display: "flex",
    alignItems: "flex-end",
    padding: "0.75rem 1rem",
    borderRadius: "12px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    maxWidth: "700px",
    width: "100%",
    margin: "auto",
    border: "1px solid #ddd"
  }}
>
  {/* Plus (File Upload) */}
  <label htmlFor="file-upload" style={{ cursor: "pointer", marginRight: "0.75rem" }}>
    <FiPlus size={20} color="#666" />
  </label>
  <input
    id="file-upload"
    type="file"
    style={{ display: "none" }}
    onChange={(e) => {
      const file = e.target.files?.[0];
      if (file) {
        console.log("File selected:", file);
        // TODO: upload logic here
      }
    }}
  />

  {/* Auto-expanding Textarea */}
  <textarea
    placeholder="Type your message..."
    rows={1}
    style={{
      flex: 1,
      resize: "none",
      overflowY: "auto",
      maxHeight: "9rem", // ~6 lines
      minHeight: "1.5rem",
      fontSize: "1rem",
      fontFamily: "inherit",
      border: "none",
      outline: "none",
      padding: "0.25rem 0",
      color: "#333",
      backgroundColor: "transparent"
    }}
    onInput={(e) => {
      e.target.style.height = "auto";
      e.target.style.height = Math.min(e.target.scrollHeight, 150) + "px";
    }}
  />

  {/* Mic & Send Icons */}
  <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginLeft: "0.75rem" }}>
    <FiMic size={20} color="#666" style={{ cursor: "pointer" }} />
    <FiSend size={20} color="#666" style={{ cursor: "pointer" }} />
  </div>
</div>

    </div>
  );
};

export default MainContent;




