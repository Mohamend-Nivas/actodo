function Card(props) {
  return (
    <div
      style={{ background: props.bgcolor }}
      className="text-white px-10 py-5 border rounded-md mt-4 text-center flex-grow"
    >
      <h1 className="font-medium text-2xl">{props.title}</h1>
      <p>{props.subtitle}</p>
    </div>
  );
}

export default Card;
