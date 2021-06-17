import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initializeForm, privacy } from "../../modules/auth";
import { withRouter } from "react-router-dom";
import Privacy from "../../components/login/Privacy";

const PrivacyForm = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeForm("register"));
    dispatch(privacy());
  }, [dispatch]);

  return <Privacy></Privacy>;
};

export default withRouter(PrivacyForm);
