// in aceasta pagina de categorie se vor afisa toate detaliile despre ficare vacanta
// deci in cadrul acestei componente s va face un request catre server petru preluarea de items
// deci avem o class Component deoarece folosesc lifecycle methods(componentDidMount)
import React from "react";
import Layout from "../components/Layout";
import travels from "../server/travels.json";
import TravelsList from "../components/TravelsList";
class Category extends React.Component {
  constructor() {
    super();
    this.state = {
      category: [],
    };
  }
  componentDidMount() {
    // vin trei props-uri: history, location, match
    console.log(this.props);
    // in match gasesc parametri rutei
    const { match } = this.props;
    // parametri rutei se gasesc in cheia params
    const categoryName = match.params.categoryName;
    // extrag din JSON doar informatiile necesare
    this.setState({ category: travels[categoryName] });
  }
  render() {
    return (
      <div>
        <Layout />
        <TravelsList travels={this.state.category.items} />
      </div>
    );
  }
}
export default Category;
