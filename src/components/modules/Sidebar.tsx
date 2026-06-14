import React from 'react';
import { 
  Building2, 
  Map, 
  Plane, 
  Sprout, 
  LayoutDashboard, 
  Settings,
  Menu,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';

export type Sector = 'urban' | 'infrastructure' | 'aerospace' | 'agriculture';

interface SidebarProps {
  activeSector: Sector;
  onSectorChange: (sector: Sector) => void;
}

const sectors = [
  { id: 'urban', name: 'Urban & Architecture', icon: Building2, color: 'text-cyan-400' },
  { id: 'infrastructure', name: 'Infrastructure & Transport', icon: Map, color: 'text-orange-400' },
  { id: 'aerospace', name: 'Aerospace & Drones', icon: Plane, color: 'text-violet-400' },
  { id: 'agriculture', name: 'Future Agriculture', icon: Sprout, color: 'text-emerald-400' },
] as const;

export function Sidebar({ activeSector, onSectorChange }: SidebarProps) {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <div 
      className={cn(
        "h-screen transition-all duration-300 border-r border-white/10 bg-black/40 backdrop-blur-xl flex flex-col sticky top-0",
        isOpen ? "w-64" : "w-20"
      )}
    >
      <div className="p-6 flex items-center justify-between border-b border-white/5">
        {isOpen && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              <LayoutDashboard className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-white tracking-tight">OSIRIS CORE</span>
          </div>
        )}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-white/5 rounded-lg transition-colors text-white/60 hover:text-white"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {sectors.map((sector) => {
          const Icon = sector.icon;
          const isActive = activeSector === sector.id;
          
          return (
            <button
              key={sector.id}
              onClick={() => onSectorChange(sector.id as Sector)}
              className={cn(
                "w-full flex items-center gap-3 p-3 rounded-xl transition-all group",
                isActive 
                  ? "bg-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)]" 
                  : "text-white/40 hover:bg-white/5 hover:text-white/80"
              )}
            >
              <Icon className={cn("w-6 h-6", isActive ? sector.color : "group-hover:text-white/80")} />
              {isOpen && (
                <span className="font-medium text-sm whitespace-nowrap">
                  {sector.name}
                </span>
              )}
              {isActive && isOpen && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_white]" />
              )}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/5">
        <button className={cn(
          "w-full flex items-center gap-3 p-3 rounded-xl text-white/40 hover:bg-white/5 hover:text-white transition-all",
          !isOpen && "justify-center"
        )}>
          <Settings className="w-6 h-6" />
          {isOpen && <span className="font-medium text-sm">System Settings</span>}
        </button>
      </div>
    </div>
  );
}
