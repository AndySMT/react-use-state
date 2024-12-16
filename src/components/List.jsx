import React from "react";
import { useState } from "react";
import languages from "../data/dataLanguages";
import Button from "./Button";
import Card from "./Card";

function List() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
    <>
      <div>
        <div className="flex-wrap d-flex">
          {languages.map((language) => (
            <Button
              key={language.id}
              language={language}
              onClick={setSelectedLanguage}
            />
          ))}
        </div>
        <div className="mt-3">
          <Card language={selectedLanguage} />
        </div>
      </div>
    </>
  );
}

export default List;
