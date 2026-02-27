import "./auth.css";
import Input from "../../components/general/Input";
import Button from "../../components/general/Button";

export default function Login({
  username,
  password,
  setUsername,
  setPassword,
}) {
  return (
    <div>
      <p>Sign in with your account</p>

      <Input
        label="Username:"
        type="text"
        value={username}
        setValue={setUsername}
      />

      <Input
        label="Password:"
        type="password"
        value={password}
        setValue={setPassword}
      />

      <Button
        type="submit"
        label="Sign In"
      />

    </div>
  );
}
