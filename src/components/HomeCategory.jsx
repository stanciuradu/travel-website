// Home Category este o componenta simpla care are 2 prop-suri pentru fiecare categorie respectiv imagine și descriere
import React from "react";
import { Link } from "react-router-dom";
import "./HomeCategory.css";

function HomeCategory(props) {
  const { image, description, routeName } = props;
  // am numele rutei
  return (
    <div className="col-6 mt-3">
      {/* la click pe link vreau sa ma duca in /category/numelre rutei */}
      {/* routeNaem este numele rutei */}
      <Link to={`/category/${routeName}`}>
        <img src={image} alt="random" className="w-100" />
      </Link>
      <p>{description}</p>
    </div>
  );
}

export default HomeCategory;
