export default function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://www.shutterstock.com/image-illustration/modern-cars-studio-room-3d-260nw-735402217.jpg"
          alt="image"
        />
      </div>
      <div className="text">
        <h2>Full-house battery backup coming later this year</h2>
        <p className="info">
          <a className="author">Shameen Shahid</a>
          <time>2023-01-06 23:45</time>
        </p>
        <p className="summary">
          Today at this special launch event , home backup power giant Ecoflow
          launched a flurry of new products.
        </p>
      </div>
    </div>
  );
}
