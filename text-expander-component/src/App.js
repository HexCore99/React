import { useState } from "react";

export default function App() {
  return (
    <div>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expanded={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander({
  collapsedNumWords = 10,
  expandButtonText = "Show More",
  collapseButtonText = "Show Less",
  buttonColor = "blue",
  expanded = false,
  className = "",
  children,
}) {
  /*styling*/
  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "6px",
    color: buttonColor,
  };
  /*styling*/

  const [expanned, setExapnned] = useState(!expanded);
  const text = String(children || "");
  function handleCollapse() {
    setExapnned((expanned) => !expanned);
  }
  return (
    <div className={className}>
      <p>
        {expanned
          ? firstNWordsPreserveOriginal(text, collapsedNumWords)
          : firstNWordsPreserveOriginal(text, text.length)}

        <span>
          <button onClick={handleCollapse} style={buttonStyle}>
            {expanned ? expandButtonText : collapseButtonText}
          </button>
        </span>
      </p>
    </div>
  );
}

function firstNWordsPreserveOriginal(text, n) {
  // Use a simple "word" matcher similar to your splitter (adjust if needed)
  const wordRe = /[^\s\.,;:!?()"\[\]{}<>\/\\]+/g;
  let match;
  let count = 0;
  let endIndex = 0;

  while ((match = wordRe.exec(text)) !== null) {
    count++;
    // When we've reached the nth token, record the end of that match
    if (count === n) {
      endIndex = wordRe.lastIndex; // end position after this token
      break;
    }
  }

  // If there were fewer than n tokens, return the whole trimmed text
  if (count < n) return text.trim();

  // Slice original text up to endIndex and trim right side
  const snippet = text.slice(0, endIndex).replace(/\s+$/g, "");
  return snippet + (wordRe.exec(text) ? "..." : ""); // add ellipsis if there are more words
}
