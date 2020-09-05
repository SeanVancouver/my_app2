import React from "react";

export default function Profile({ profile }) {
  return (
    <div className="profileModal flex">
      <img src={profile.image}></img>
      <div className="right_content">
        <div className="flex">
          <h3>{profile.name}, &nbsp;</h3>
          <h3>{profile.age}, &nbsp;</h3>
          <h3>{profile.gender}, &nbsp;</h3>
        </div>

        <p>{profile.desc}</p>
      </div>
    </div>
  );
}
