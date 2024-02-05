import React from "react";
import { createContext, useState } from "react";
import axios from "axios";

export const WordContext = createContext();
export const SearchContext = ({ children }) => {
  const [word, setWord] = useState("");
  const [phonetic, setPhonetic] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [nounDefinition, setNounDefinition] = useState("");
  const [verbDefinition, setVerbDefinition] = useState("");
  const [audio, setAudio] = useState(null);
  const [sourceUrl, setSourceUrl] = useState(null);
  const [example, setExample] = useState("");
  const [synonyms, setSynonyms] = useState("");

  const GetWord = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`
      );
      const data = await response.data;

      console.log("data: ", data);
      console.log("word: ", data[0].word);
      console.log("synonyms: ", data[0].meanings[0].synonyms);

      setWord(data[0].word);
      setNounDefinition(data[0].meanings[0].definitions);
      setVerbDefinition(data[0].meanings[1].definitions);
      setError(null);
      setPhonetic(data[0].phonetic);
      setAudio(data[0].phonetics);
      setSourceUrl(data[0].sourceUrls);
      setSynonyms(data[0].meanings[0].synonyms);
      setExample(data[1].meanings[0].definitions[0].example);
    } catch (error) {
      setError("An error occurred while fetching data.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <WordContext.Provider
      value={{
        synonyms,
        example,
        audio,
        sourceUrl,
        searchTerm,
        phonetic,
        setSearchTerm,
        loading,
        error,
        GetWord,
        nounDefinition,
        verbDefinition,
        word,
      }}
    >
      {children}
    </WordContext.Provider>
  );
};
