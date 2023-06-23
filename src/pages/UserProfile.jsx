import User from "../components/User";
import { useAuth } from "../hooks/useAuth";

const UserProfile = () => {
  const { user } = useAuth();

  return <User name={user.name} email={user.email} />;
};

export default UserProfile;
