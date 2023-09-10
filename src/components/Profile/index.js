export default function Profile({ name, image }) {
  return (
    <div className="profile">
      <img src={image} alt={name} />
      <h4>{name}</h4>
    </div>
  );
}
