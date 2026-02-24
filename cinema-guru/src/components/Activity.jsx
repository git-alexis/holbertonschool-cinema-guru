import "./components.css";

export default function Activity({ activity }) {
  return (
    <li>

      <p>
        <span>{activity.user.username}</span>
        added
        <span>{activity.title.title}</span>
        to
        {activity.activityType}
        -
        <span>{activity.updatedAt}</span>
      </p>

    </li>
  );
}
