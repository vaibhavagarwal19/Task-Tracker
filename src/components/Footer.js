import { Link } from "react-router-dom";

const footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2021</p>
      <Link to href="/about">
        About
      </Link>
    </footer>
  );
};

export default footer;
