// displays dashboard statistic
// receives statistic title and value as props
function Statistic({ title, value }) {
  return (
    <div className="stat-card">
      <h3>{value}</h3>
      <p>{title}</p>
    </div>
  );
}

export default Statistic;