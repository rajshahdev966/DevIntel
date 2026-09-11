export const useSettings = () => {
  const { user } = useSelector((store) => store.profile);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return { navigate, dispatch, user };
};
