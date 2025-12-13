import { Button } from "@/components/ui/button";
import { useTeamStore } from "@/stores/useTeamStore";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Pitch } from "./components/Pitch";
import SubstituteBench from "./components/SubstituteBench";

export const XI_TEAM_ROUTE = '/starting-xi'

export default function StartingXI() {
  const navigate = useNavigate(); 
  const { players, startingXI, setStartingXI } = useTeamStore();
 
  const selectedIds = Object.values(startingXI).filter(Boolean);
  const substitutes = players.filter(p => !selectedIds.includes(p.id));
  
  const isXIComplete = selectedIds.length === 11;

  const handleSaveFormation = () => {
    if (!isXIComplete) {
      toast.error("Please select all 11 players before saving!");
      return;
    }
    
    toast.success("Starting XI saved successfully!");
  };

  return (
    <div className="min-h-screen p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Starting XI</h1>
            <p className="text-sm text-gray-600">
              {selectedIds.length}/11 players selected
            </p>
          </div>
        </div>
        
        <Button 
          onClick={handleSaveFormation}
          disabled={!isXIComplete}
          className={!isXIComplete ? 'opacity-50 cursor-not-allowed' : ''}
        >
          Save Formation
        </Button>
      </div>

      {!isXIComplete && selectedIds.length > 0 && (
        <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-sm text-amber-800">
            ⚠️ Select {11 - selectedIds.length} more player(s) to complete your Starting XI
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <Pitch 
            startingXI={startingXI}
            setStartingXI={setStartingXI}
            players={players}
          />
        </div>
        <div className="lg:col-span-1">
          <SubstituteBench players={substitutes} />
        </div>
      </div>
    </div>
  );
}