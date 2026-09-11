import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

export const useSettings = () => {
  const { user } = useSelector((store) => store.profile);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return { navigate, dispatch, user };
};
