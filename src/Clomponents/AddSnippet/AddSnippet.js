import React, { useState } from "react";
import "./AddSnippet.css";
import AddSnippetCard from "./AddSnippetCard";
import Data from "./Data";

function AddSnippet() {
  const [item, setItem] = useState(Data);
  return (
    <div className="content-containe">
      <AddSnippetCard item={item} setItem={setItem} />
    </div>
  );
}

export default AddSnippet;
