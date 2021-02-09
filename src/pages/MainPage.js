import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Container, Dropdown, Flag, Menu } from "semantic-ui-react";
import LanguageContext from "../hooks/useLanguageContext";
import CareerPage from "./CareerPage";
import HomePage from "./HomePage";
import ProjectPage from "./ProjectPage";

export default function MainPage() {

  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useContext(LanguageContext);

  const languages = [
    {
      key: 'en',
      value: 'en',
      text: 'English',
      image: { avatar: true, src: '/flag/en.png' }
    },
    {
      key: 'fr',
      value: 'fr',
      text: 'French',
      image: { avatar: true, src: '/flag/fr.png' }
    },
    {
      key: 'no',
      value: 'no',
      text: 'Norsk',
      image: { avatar: true, src: '/flag/no.png' }
    },
  ]

  const languageChange = (e, d) => {
    console.log(e, d);
    setCurrentLanguage(d.value);
  }

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

            <Menu.Item position='right'>
              <Dropdown placeholder={t('General.Language')} floating>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={(e, d) => languageChange(e, d)} value="en" text="English" image={{ avatar: true, src: '/flag/en.png' }} />
                  <Dropdown.Item onClick={(e, d) => languageChange(e, d)} value="fr" text="Français" image={{ avatar: true, src: '/flag/fr.png' }} />
                  <Dropdown.Item onClick={(e, d) => languageChange(e, d)} value="no" text="Norsk" image={{ avatar: true, src: '/flag/no.png' }} />
                </Dropdown.Menu>
              </Dropdown>
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
