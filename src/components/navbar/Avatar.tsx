import React from "react";

const Avatar = ({ isOnline, children }: { isOnline?: boolean; children: React.ReactNode }): JSX.Element => {
  return (
    <div className={`avatar placeholder ${isOnline ? "online" : ""}`}>
      <div className="bg-neutral text-neutral-content w-12 rounded-full relative">
        <span className="text-xl">
          {children}
        </span>
      </div>
    </div>
  );
};

export default Avatar;