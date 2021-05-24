import Privacy from "../../components/login/Privacy";
import { withRouter } from "react-router-dom";

const PrivacyForm = ({ history }) => {
  const onClick = (e) => {
    e.preventDefault();
    history.push("/signUp");
  };
  console.log(history.goback);

  return <Privacy type="privacy" onClick={onClick} />;
};

export default withRouter(PrivacyForm);
