import React, { useState } from "react";
import Layout from "../Components/Layouts/Layout";

function Home() {
  const [grid, setGrid] = useState(Array(9).fill(null));
  const [clicks, setClicks] = useState([]);

  const handleClick = (index) => {
    if (grid[index] === null) {
      const newGrid = [...grid];
      newGrid[index] = "green";
      setGrid(newGrid);

      const newClicks = [...clicks, index];
      setClicks(newClicks);

      if (newClicks.length === 9) {
        changeColorsToOrange(newClicks);
      }
    }
  };

  const changeColorsToOrange = (clickSequence) => {
    const newGrid = [...grid];

    newGrid[clickSequence[clickSequence.length - 1]] = "green";
    setGrid([...newGrid]);

    setTimeout(() => {
      clickSequence.forEach((index, i) => {
        setTimeout(() => {
          newGrid[index] = "orange";
          setGrid([...newGrid]);
        }, i * 500);
      });
    }, 500);
  };

  const resetGrid = () => {
    setGrid(Array(9).fill(null));
    setClicks([]);
  };

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "10px",
            marginBottom: "3rem",
          }}
        >
          {grid.map((color, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              style={{
                width: "100px",
                height: "100px",
                backgroundColor: color || "lightgray",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              {index + 1}
            </div>
          ))}
        </div>
        <button
          onClick={resetGrid}
          style={{
            height: "2.1rem",
            width: "4.1rem",
          }}
        >
          Reset
        </button>
      </div>
    </Layout>
  );
}

export default Home;
