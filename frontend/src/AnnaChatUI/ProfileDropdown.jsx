import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../auth/firebase";

const ProfileDropdown = ({ user }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSignOut = async () => {
  try {
    await signOut(auth); // Firebase clears all tokens & session
    localStorage.clear(); // optional: clear any app-specific localStorage
    sessionStorage.clear(); // optional: clear sessionStorage
    navigate("/"); // redirect to login or landing page
  } catch (error) {
    console.error("Error signing out:", error);
  }
};

  return (
    <div style={{ position: "relative" }}>
      {/* Profile Avatar */}
      <img
        src={user.photoURL}
        alt="User"
        onClick={() => setShowDropdown(!showDropdown)}
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          objectFit: "cover",
          marginLeft: "0.5rem",
          cursor: "pointer"
        }}
      />

      {/* Dropdown */}
      {showDropdown && (
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "120%", // just below the image
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            padding: "1rem",
            zIndex: 1000,
            minWidth: "250px"
          }}
        >
          <div style={{ marginBottom: "0.75rem", color: "#333" }}>
            <div style={{ fontWeight: "bold", marginBottom: "0.25rem" }}>
              {user.displayName}
            </div>
            <div style={{ fontSize: "0.85rem", color: "#555" }}>
              {user.email}
            </div>
          </div>


          <button
            onClick={handleSignOut}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "6px",
              border: "none",
              background: "#e74c3c",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "0.9rem"
            }}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
