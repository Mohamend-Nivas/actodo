function Header(props) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Hello {props.name}.!!</h1>
      <p className="text-gray-700">I help you manage your activities;)</p>
    </div>
  );
}

export default Header;
