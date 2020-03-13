import React from 'react';
import { observer, inject } from "mobx-react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AdminListView from "./components/AdminListView"
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isNavOpen: false }
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }
  openNav() {
    this.setState({ isNavOpen: true })
  }
  closeNav() {
    this.setState({ isNavOpen: false })
  }
  render() {
    const { isNavOpen } = this.state;
    return (<div>
      <Router>
        <div>
          <div>
            <div className="app-header">
            <span onClick={this.openNav}>&#9776; open</span>
            </div>
            <div className={isNavOpen ? "sidenav" : "sidenav hidden"}>
              <a className="closebtn" onClick={this.closeNav}>&times;</a>
              <Link to="/" onClick={this.closeNav}>Home</Link>
              <Link to="/admin" onClick={this.closeNav}>admin</Link>
            </div>
           
          </div>
          <Switch>
            <Route path="/admin">
             <AdminListView adminStore={this.props.store.adminStore}/>
            </Route>
            <Route path="/">
              <div>home</div>
            </Route>

          </Switch>

        </div>
      </Router>
    </div>)
  }
}
export default inject("store")(
  observer(({ store }) => <App store={store}/>))
