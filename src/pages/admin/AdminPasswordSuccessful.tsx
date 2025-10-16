import { Link } from "react-router-dom";
import Button from "../../components/UI/Button";
import "../../App.css";

const AdminPasswordSuccessful: React.FC = () => {
  return (
    <section className="form-section">
      <div className="passwordSuccessful-container">
        <h3>Password Reset Successful</h3>
        <p className="text-center">
          Your password has been changed successful. You can login with your
          email address and new password
        </p>
        <Link to="/admin/reset">
          <Button clsName="w-[400px]">Back to Login</Button>
        </Link>
      </div>
    </section>
  );
};

export default AdminPasswordSuccessful;
