import "./components.css";

export default function Activity({ activity }) {
  let action = "";
  let target = "";
  const typeActivity = activity.activityType;

  if (typeActivity === "favorite") {
    action = "added";
    target = "favorites";
  }

  if (typeActivity === "watchLater") {
    action = "added";
    target = "watch later";
  }

  if (typeActivity === "removeFavorited") {
    action = "removed";
    target = "favorites";
  }

  if (typeActivity === "removeWatchLater") {
    action = "removed";
    target = "watch later";
  }

  const formattedDate = new Date(activity.updatedAt)
    .toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <li>

      <p>
        <span>{activity.user.username}</span>
        {" "}
        {action}
        {" "}
        <span>{activity.title.title}</span>
        {" "}
        {action === "added" ? "to" : "from"}
        {" "}
        {target}
        {" - "}
        <span>{formattedDate}</span>
      </p>

    </li>
  );
}
