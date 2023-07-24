import { useState } from "react";

export function TwitterFollowCard({
  children,
  userName = "unknown",
  initialIsFollowing = false,
}) {
  const [state, setState] = useState(initialIsFollowing);
  const text = state ? "Siguiendo" : "Seguir";
  const buttonClassName = state
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";
  const handleClick = () => {
    setState(!state);
  };
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={"https://unavatar.io/twitter/" + userName}
          alt="Profile picture"
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside className="tw-followCard-aside">
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
