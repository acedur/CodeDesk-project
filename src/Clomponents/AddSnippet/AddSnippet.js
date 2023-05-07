import React from "react";
import "./AddSnippet.css";
import AddSnippetCard from "./AddSnippetCard";
import Data from "./Data";

function AddSnippet() {
  const slicedData = Data.slice(1);

  return (
    <div className="content-containe">
      {slicedData.map((Data) => (
        <AddSnippetCard
          key={Data.id}
          company={Data.company}
          time={Data.time}
          position={Data.position}
          category={Data.category}
          location={Data.location}
          description={Data.description}
          views={Data.views}
          likes={Data.likes}
          applicants={Data.applicants}
          shares={Data.shares}
        />
      ))}
    </div>
  );
}

export default AddSnippet;
