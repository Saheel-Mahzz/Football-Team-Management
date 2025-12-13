import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { useTeamStore } from "@/stores/useTeamStore";
import { useState } from "react";
import TeamCard from "./TeamCard";

const ITEMS_PER_PAGE = 6;

export default function TeamGrid() {
  const {players,deletePlayer,updatePlayer} = useTeamStore()
    const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(players.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedPlayers = players.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  if(players.length === 0){
    return(
            <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg">
        <p className="text-gray-500 text-lg">No players in the squad yet</p>
        <p className="text-gray-400 text-sm mt-2">Add your first player to get started!</p>
      </div>
    )
  }

   return (
    <div>
      <div className="grid md:grid-cols-3 gap-2 mb-4">
        {paginatedPlayers.map(player => (
          <TeamCard 
            key={player.id}
            player={player}
            updatePlayer={updatePlayer}
            deletePlayer={deletePlayer}
          />
        ))}
      </div>
      
      {totalPages > 1 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                 className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
              />
            </PaginationItem>
            
            <PaginationItem>
              <span className="px-4">
                Page {currentPage} of {totalPages}
              </span>
            </PaginationItem>
            
            <PaginationItem>
              <PaginationNext 
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
      className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
