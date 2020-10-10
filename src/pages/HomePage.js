import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "semantic-ui-react";
import LanguageContext from "../hooks/useLanguageContext";

export default function HomePage() {

  const { t, i18n } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useContext(LanguageContext);

  return (
    <div>

      <h1>{t('General.Hello')}</h1>
      <Button primary onClick={e => setCurrentLanguage('en')} >En</Button>
      <Button secondary onClick={e => setCurrentLanguage('fr')}>Fr</Button>

    </div>
  );
}