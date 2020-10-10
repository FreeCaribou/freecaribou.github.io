import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
import CareerPage from "./CareerPage";
import HomePage from "./HomePage";
import ProjectPage from "./ProjectPage";

export default function MainPage() {
  return (
    <Router>
      <div>

        <Menu color={'blue'} inverted fixed='top'>
          <Container>
            <Menu.Item color={'orange'}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item color={'orange'}>
              <Link to="/project">Project</Link>
            </Menu.Item>
            <Menu.Item color={'orange'}>
              <Link to="/career">Career</Link>
            </Menu.Item>
          </Container>
        </Menu>

        <Container style={{ marginTop: '7em' }}>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/project">
              <ProjectPage />
            </Route>
            <Route path="/career">
              <CareerPage />
            </Route>
          </Switch>
        </Container>

      </div>
    </Router>
  );
}
