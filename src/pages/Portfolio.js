import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getResume } from '../redux/actions/portfolioActions';

const Portfolio = () => {
  const dispatch = useDispatch();
  const { resume, loading, error } = useSelector(state => state.portfolio);

  useEffect(() => {
    dispatch(getResume());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="portfolio-container">
      <h1>My Portfolio</h1>
      {resume && (
        <div>
          <h2>{resume.name}</h2>
          <p>{resume.title}</p>
        </div>
      )}
    </div>
  );
};

export default Portfolio;