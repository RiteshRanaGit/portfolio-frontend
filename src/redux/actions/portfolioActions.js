import { setResume, setLoading, setError } from '../reducers/portfolioReducer';
import { fetchResume } from '../../services/api';

export const getResume = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await fetchResume();
    dispatch(setResume(response.data));
    dispatch(setError(null));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};