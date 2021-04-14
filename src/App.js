import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import MyCourse from "./Components/MyCourse/MyCourse";
import FeaturedCourses from "./Components/FeaturedCourses/FeaturedCourses";
import Category from "./Components/Category/Category";
import HomeBanner from "./Components/Homepage/HomeBanner/HomeBanner";
import NewStartupPage from "./Components/Homepage/NewStartuppage/NewStartupPage";
import FooterTwo from "./Components/Homepage/FooterTwo/FooterTwo";
import NewLearnPage from "./Components/Homepage/LearnPage/NewLearnPage";
import BannerHeader from "./Components/BannerHeader/BannerHeader";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/learn">
            <BannerHeader />
            <MyCourse />
            <FeaturedCourses />
            <Category />
          </Route>
          <Route path="/rovault">
            <BannerHeader />
            <NewStartupPage />
            <FooterTwo />
          </Route>
          <Route path="/blockchain">
            <BannerHeader />
            <NewLearnPage />
            <FooterTwo />
          </Route>

          <Route path="/home">
            <Header />
            <HomeBanner />
            <FooterTwo />
            </Route>
            <Route path="/">
              <Home />
            </Route>
         
        </Switch>
      </div>
    </Router>
  );
}

export default App;
