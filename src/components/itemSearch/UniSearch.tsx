import { useEffect, useRef, useState } from "react";
import { Card, CardTypes } from "../card/Card";
import styles from "./unisearch.module.scss";
import { parseCsv } from "../../util/csvparse";

export const UniSearch = () => {
  const [searchText, setSearchText] = useState("");
  const [uniList, setUniList] = useState<CardTypes[]>([]);
  const inputRef = useRef(null);
  const setSearchState = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = e.target.value;
    setSearchText(inputText);
  };
  const csvLink =
    "https://gist.githubusercontent.com/simonlast/d5a86ba0c82e1b0d9f6e3d2581b95755/raw/f608b9b896dd3339df13dae317998d5f24c00a50/edu-scorecard.csv";
 
    useEffect(() => {
    (async () => {
      const csv = await parseCsv(csvLink);
      csv && setUniList(csv);
    })();
  }, []);

  return (
    <div className={styles.uniSearch}>
      <input placeholder="Search..." className={styles.searchBar} type="text" ref={inputRef} onChange={setSearchState} />
      <div className={styles.results}>
        {uniList &&
          uniList.map((listItem) => {
            // we can make a simple way to search these cards 
            let stringSearch = `${listItem.city} ${listItem.state} ${listItem.name}`;
            stringSearch = stringSearch.toLowerCase();

            if (stringSearch.includes(searchText.toLowerCase())) {
              return (
                <Card
                  id={listItem.id}
                  key={listItem.id}
                  name={listItem.name}
                  link={listItem.link}
                  state={listItem.state}
                  city={listItem.city}
                />
              );
            }
          })}
      </div>
    </div>
  );
};
