import { createContext, SetStateAction, Dispatch } from "react";

const LanguageContext = createContext([
  null,
  language => language
]);

export default LanguageContext;
