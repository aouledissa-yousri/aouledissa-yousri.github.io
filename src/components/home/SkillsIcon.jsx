import React from "react";

function SkillIcon({ skill, logoUrl }) {
  return (
    <div style={{ width: "95%", textAlign: "center", margin: "10px 0" }}>
      <img
        src={logoUrl}
        alt={`${skill} logo`}
        style={{ width: "100px", height: "100px", objectFit: "contain", marginBottom: "8px" }}
      />
      <p className="lead mb-0"><b>{skill}</b></p>
    </div>
  );
}

export default SkillIcon;
