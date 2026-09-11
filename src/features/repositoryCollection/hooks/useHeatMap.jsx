
const useHeatMap = (commitContent)=>{
     const highest = Math.max(...commitContent?.map((elem) => elem.total), 1);
  

  const getLevel = (count) => {
    if (!count || count === 0) return 0;
    const ratio = count / highest;
    if (ratio <= 0.25) return 1;
    if (ratio <= 0.5) return 2;
    if (ratio <= 0.75) return 3;
    return 4;
  };

  const colors = [
    "bg-[#121b2d]", // Level 0 (no commits)
    "bg-[#1d3b6f]", // Level 1
    "bg-[#2563eb]", // Level 2
    "bg-[#3b82f6]", // Level 3
    "bg-[#60a5fa]", // Level 4 (peak)
  ];


  return {
    colors,
    getLevel,
    
  }
}  
export default useHeatMap;