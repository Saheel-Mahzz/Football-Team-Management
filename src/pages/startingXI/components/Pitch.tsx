export function Pitch(){
  return (
    <div className="w-full aspect-[2/1] bg-green-600 rounded-xl border-4 border-white p-4 h-full">
      <div className="grid grid-cols-4 grid-rows-3 h-full gap-4">
        
        <div className="col-start-2 row-start-1 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            FWD
          </div>
        </div>
        <div className="col-start-3 row-start-1 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            FWD
          </div>
        </div>
        
        {[1, 2, 3, 4].map(i => (
          <div key={i} className={`col-start-${i} row-start-2 flex items-center justify-center`}>
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              MID
            </div>
          </div>
        ))}
        
        {[1, 2, 3, 4].map(i => (
          <div key={i} className={`col-start-${i} row-start-3 flex items-center justify-center`}>
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              DEF
            </div>
          </div>
        ))}
        
        <div className="col-start-2 col-span-2 row-start-4 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            GK
          </div>
        </div>
        
      </div>
    </div>
  );
};