import React, { useEffect, useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../auth/firebase";

// Helper to format display name (only first name)
function formatDisplayName(name) {
  if (!name) return "";
  const nameWithoutRoll = name.replace(/ce\d{2}[a-zA-Z0-9]+/i, "");
  const parts = nameWithoutRoll.match(/[A-Z][a-z]*/g) || [];
  return parts[0] || "";
}

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [user] = useAuthState(auth);
  const sidebarRef = useRef();

  // Hide sidebar if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsOpen]);

  return (
    <>
      {/* Menu Icon */}
      {!isOpen && (
        <div
          onClick={() => setIsOpen(true)}
          style={{
            position: "fixed",
            top: "1.5rem",
            left: "1rem",
            backgroundColor: "#444",
            padding: "0.5rem 0.75rem",
            borderRadius: "8px",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
            zIndex: 1000
          }}
        >
          ☰
        </div>
      )}

      {/* Sidebar */}
      {isOpen && (
        <div
          ref={sidebarRef}
          style={{
            height: "90vh",
            width: "200px",
            backdropFilter: "blur(10px)",
            background: "rgba(210, 210, 210, 0.95)",
            margin: "1rem",
            borderRadius: "1rem",
            boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
            padding: "1rem 0.8rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 999
          }}
        >
          {/* Header + Buttons Centered Vertically */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "2rem", lineHeight: "1.2" }}>
  <div
    style={{
      fontSize: "1.75rem",
      fontWeight: 1000,
      color: "black",
      fontFamily: "Poppins"
    }}
  >
    Welcome to
  </div>
  <div
    style={{
      fontSize: "1.75rem",
      fontWeight: 1000,
      color: "black",
      fontFamily: "Poppins"
    }}
  >
    Ask-Anna!
  </div>
</div>


            <button style={pillButtonStyle}>New Chat</button>
            <button style={pillButtonStyle}>Home</button>
            <button style={pillButtonStyle}>About</button>
          </div>

          {/* Footer - User Info */}
          <div
            style={{
              borderTop: "1px solid #aaa",
              paddingTop: "0.8rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {user && (
              <>
                <span
                  title={formatDisplayName(user.displayName)}
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    color: "#222",
                    whiteSpace: "nowrap"
                  }}
                >
                  {formatDisplayName(user.displayName)}
                </span>

                <img
                  src={user.photoURL}
                  alt="User"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginLeft: "0.5rem"
                  }}
                />
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

const pillButtonStyle = {
  width: "80%",
  padding: "0.5rem",
  marginBottom: "0.75rem",
  borderRadius: "999px",
  backgroundColor: "#444",
  color: "#fff",
  border: "none",
  cursor: "pointer",
  fontSize: "0.9rem",
  transition: "background-color 0.2s ease",
  textAlign: "center"
};

export default Sidebar;








