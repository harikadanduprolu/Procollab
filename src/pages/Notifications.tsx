// src/pages/Notifications.tsx
import React from "react";

export function Notifications() {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-neon-pink">Notifications</h1>
        <ul className="space-y-4 mt-6">
          <li className="bg-surface-dark p-4 rounded-lg">New comment on your project</li>
          <li className="bg-surface-dark p-4 rounded-lg">Project update from Alice Doe</li>
          <li className="bg-surface-dark p-4 rounded-lg">You have a new follower</li>
        </ul>
      </div>
    );
  }

export default Notifications;