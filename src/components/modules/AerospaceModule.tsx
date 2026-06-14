import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Navigation, Wind, Radio, ShieldAlert } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function AerospaceModule() {
  const [drones, setDrones] = React.useState([
    { id: 'TX-402', x: 20, y: 30, status: 'active' },
    { id: 'FL-991', x: 60, y: 50, status: 'active' },
    { id: 'CR-777', x: 80, y: 20, status: 'alert' },
  ]);

  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight flex items-center gap-2">
            <Plane className="w-8 h-8 text-violet-400" />
            Aerospace & Drone Navigation
          </h1>
          <p className="text-white/50 mt-1">Traffic control for urban air mobility and delivery networks.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="bg-white/5 border-white/10 text-white hover:bg-white/10">
            <Navigation className="w-4 h-4 mr-2" />
            Air Corridor Editor
          </Button>
          <Button className="bg-violet-600 hover:bg-violet-500 text-white">
            <Radio className="w-4 h-4 mr-2" />
            Broadcast Signal
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 bg-black/60 border-white/10 backdrop-blur-xl relative overflow-hidden aspect-video group">
          <div className="absolute inset-0 z-0">
             <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/7778d949-f36d-490f-95b2-02ff78145875/aerospace-navigation-corridor-5cd8e147-1781476599736.webp" 
              alt="Aerospace Navigation"
              className="w-full h-full object-cover opacity-50 transition-transform duration-[10s] ease-linear group-hover:scale-110"
            />
          </div>
          
          {/* Radar Overlay */}
          <div className="absolute inset-0 z-10 p-8 flex flex-col justify-between pointer-events-none">
            <div className="flex justify-between items-start">
              <div className="bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/10">
                <p className="text-[10px] text-violet-400 uppercase font-mono tracking-widest mb-1">Sky Scan Active</p>
                <div className="flex items-center gap-4 text-white">
                  <div>
                    <span className="text-xs text-white/40 block">Vessels</span>
                    <span className="text-xl font-mono">142</span>
                  </div>
                  <div className="w-[1px] h-8 bg-white/10" />
                  <div>
                    <span className="text-xs text-white/40 block">Congestion</span>
                    <span className="text-xl font-mono text-emerald-400">LOW</span>
                  </div>
                </div>
              </div>
              <Badge className="bg-violet-500/20 text-violet-400 border-violet-500/50">LEVEL 3 CORRIDOR</Badge>
            </div>

            {/* Simulating moving drones on screen */}
            <div className="relative flex-1">
              {drones.map((drone) => (
                <motion.div
                  key={drone.id}
                  className="absolute"
                  style={{ left: `${drone.x}%`, top: `${drone.y}%` }}
                  animate={{ 
                    x: [0, 10, -10, 0],
                    y: [0, -5, 5, 0]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className={cn(
                    "flex flex-col items-center group/drone pointer-events-auto cursor-crosshair",
                    drone.status === 'alert' ? "text-red-400" : "text-violet-400"
                  )}>
                    <div className="relative">
                       <Navigation className="w-6 h-6 rotate-45" />
                       <div className="absolute inset-0 animate-ping opacity-30 rounded-full bg-current" />
                    </div>
                    <span className="text-[8px] mt-1 font-mono bg-black/60 px-1 rounded opacity-0 group-hover/drone:opacity-100 transition-opacity">
                      {drone.id}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-md bg-black/40 backdrop-blur-md p-2 rounded-full border border-white/10 flex gap-2 pointer-events-auto">
                <Button variant="ghost" size="sm" className="flex-1 text-xs text-white/60">Auto-Pilot</Button>
                <Button variant="ghost" size="sm" className="flex-1 text-xs text-white/60">Safe Mode</Button>
                <Button variant="secondary" size="sm" className="flex-1 text-xs bg-violet-600 text-white hover:bg-violet-500 border-none">Override</Button>
              </div>
            </div>
          </div>
        </Card>

        <Card className="bg-black/40 border-white/10 backdrop-blur-xl p-6 flex flex-col">
          <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-6">
            <Wind className="w-5 h-5 text-violet-400" />
            Atmospheric Conditions
          </h3>
          <div className="space-y-8 flex-1">
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-xs text-white/40 uppercase">Wind Velocity</span>
                <span className="text-2xl font-mono text-white">12 m/s</span>
              </div>
              <div className="h-24 flex items-end gap-1">
                {Array.from({ length: 20 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 bg-violet-500/20 rounded-t"
                    initial={{ height: 0 }}
                    animate={{ height: `${Math.random() * 80 + 20}%` }}
                    transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse', delay: i * 0.05 }}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                <span className="text-[10px] text-white/40 uppercase block mb-1">Visibility</span>
                <span className="text-lg font-mono text-white">99%</span>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                <span className="text-[10px] text-white/40 uppercase block mb-1">Turbulence</span>
                <span className="text-lg font-mono text-emerald-400">LOW</span>
              </div>
            </div>

            <Card className="bg-red-500/10 border-red-500/20 p-4 flex items-center gap-3">
              <ShieldAlert className="w-8 h-8 text-red-500" />
              <div>
                <p className="text-sm font-medium text-white">Alert Level 2</p>
                <p className="text-xs text-white/50">Restricted drone flight in Zone B.</p>
              </div>
            </Card>
          </div>
        </Card>
      </div>
    </div>
  );
}
