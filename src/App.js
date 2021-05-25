import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Page404 from "./pages/Page404";
// import pagina de categorie
import Category from "./pages/Category";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        {/* am pus ruta catre pagina de categorie */}
        {/* din JSON, numele categoriei variaza, motiv pentru care voi pune o variabila in URL */}
        <Route path="/category/:categoryName" component={Category} />
        <Route path="*" component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
