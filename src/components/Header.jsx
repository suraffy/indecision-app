const Header = (props) => (
  <div className="header">
    <div className="container">
      <h1 className="header__title">{props.title}</h1>
      <h3 className="header__subtitle">
        Put your life in the hands of a computer
      </h3>
    </div>
  </div>
);

Header.defaultProps = {
  title: "Indecision",
};

export default Header;
