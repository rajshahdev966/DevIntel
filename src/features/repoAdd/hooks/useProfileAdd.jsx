import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { profileAddAction } from "../state/profileActions";
import { useNavigate } from "react-router";

export const useProfileAdd = () => {
  const {
    register,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((store) => store.profile);
  const [profileIdSearch, setProfileIdSearch] = useState(null);

  useEffect(() => {
    if (!profileIdSearch || profileIdSearch.trim() === "") return;

    const timeout = setTimeout(() => {
      dispatch(profileAddAction(profileIdSearch));
    }, 700);
    return () => clearTimeout(timeout);
  }, [profileIdSearch]);

  return {
    register,
    errors,
    user,
    setProfileIdSearch,
    navigate
  }



};
