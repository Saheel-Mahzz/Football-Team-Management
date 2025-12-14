import { Card } from '@/components/ui/card';
import { getPositionColor, getPositionCount } from '@/pages/team/utils/teamStatus';
import { Player } from '@/types/players';

export default function TeamPositionCountCard({players}:{players:Player[]}) {
 const {defender,goalKeeper,forward,mid} = getPositionCount(players)
 const positionStats = [
  { type: 'GK', label: 'Goalkeepers', count: goalKeeper, min: 1 },
  { type: 'DEF', label: 'Defenders', count: defender, min: 4 },
  { type: 'MID', label: 'Midfielders', count: mid, min: 4 },
  { type: 'FWD', label: 'Forwards', count: forward, min: 2 },
];

return (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
    {positionStats.map(({ type, label, count, min }) => {
      const color = getPositionColor(type);
      return (
        <Card
          key={type}
          className={`${color.bg} ${color.border} p-4`}
        >
          <div className={`text-sm ${color.text}`}>{label}</div>
          <div className={`text-2xl font-bold ${color.text.replace('700', '800')}`}>
            {count}
            {count < min && (
              <span className='text-red-500 text-sm ml-2'>(Min:{min})</span>
            )}
          </div>
        </Card>
      );
    })}
  </div>
);
}
