import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-page">
      <h2>Welcome</h2>
      <button onClick={() => navigate("/")}>Back Homepage</button>
    </div>
  );
};

export default Welcome;
