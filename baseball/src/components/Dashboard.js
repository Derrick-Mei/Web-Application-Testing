import React from "react";

export default function Dashboard(props) {
  const { baseballFunctions } = props;
  return (
    <div>
      Dashboard
      <ul>
        {Object.keys(baseballFunctions).map((item, index) => {
          return (
            <button key={index} onClick={baseballFunctions[item]} data-testid={item}>
                {/* make the first letter uppercase */}
              {item.replace(/^./, item[0].toUpperCase())}
            </button>
          );
        })}
      </ul>
    </div>
  );
}
