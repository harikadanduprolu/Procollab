// src/pages/Profile.tsx
import React from "react";

export function Profile() {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-neon-green">Your Profile</h1>
        <img src="https://source.unsplash.com/100x100/?person" alt="Profile" className="w-24 h-24 rounded-full my-4" />
        <p className="text-content-primary">Name: John Doe</p>
        <p className="text-content-primary">Email: johndoe@example.com</p>
        <p className="text-content-primary">Projects: 5</p>
      </div>
    );
  }

export default Profile;