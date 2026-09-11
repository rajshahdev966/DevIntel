import React from "react";
import useHeatMap from "../../hooks/useHeatMap";

const HeatMap = ({ commitContent }) => {
  if(!commitContent) return;
  const { colors, getLevel } = useHeatMap(commitContent);
  if (!commitContent) return null;
  return (
    <div className="flex gap-1 justify-center">
      {commitContent.map((weekObj, weekIdx) => (
        <div key={weekIdx} className="flex flex-col gap-1 shrink-0">
          {weekObj.days.map((dayCommits, dayIdx) => (
            <div
              className={`w-3.25 h-3.25 rounded-xs ${colors[getLevel(dayCommits)]} hover:scale-125 transition-transform cursor-pointer`}
              key={dayIdx}
              title={`${dayCommits} commits`}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default HeatMap;
