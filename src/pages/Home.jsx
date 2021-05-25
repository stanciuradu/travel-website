import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
// import componenta simpla de tip Home Category
import HomeCategory from "../components/HomeCategory";
// import JSON-ul creat
import travels from "../server/travels.json";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      // prima data pagina de categorii de vacanta o sa fie un vector gol pana cand datele vin de la server
      categories: [],
      // in aceasta pagina de Home array-ul pentru numele categoriei de la JSON este zero intial
      categoryName: [],
    };
  }
  // in cadrul metodei componentDidMount fac request-ul o singura data catre JSON pentru preluarea de date
  componentDidMount() {
    // din obiectul creat iau valorile pentru fiecare categorie
    const categories = Object.values(travels);
    this.setState({ categories });
    // din JSON iau cheile pentru numele fiecarei categorii
    const categoryName = Object.keys(travels);
    this.setState({ categoryName });
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <Layout />
        <Header />
        <div className="container">
          <div className="row">
            {
              //    datele intiale ale categoriiloe sunt tinute in state,deci mapez pirn array-ul din state
              this.state.categories.map((category, index) => {
                return (
                  <HomeCategory
                    image={category.image}
                    description={category.description}
                    key={index}
                    // pasez catre homeCategory si numele rutei
                    routeName={this.state.categoryName[index]}
                  />
                );
              })
            }
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Home;
