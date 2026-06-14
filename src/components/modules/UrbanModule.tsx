import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Box, Grid3X3, Layers, Ruler } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function UrbanModule() {
  const [selectedZone, setSelectedZone] = React.useState<string | null>(null);

  const zones = [
    { id: 'residential', name: 'High-Density Residential', color: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/50' },
    { id: 'commercial', name: 'Vertical Commercial', color: 'bg-blue-500/20 text-blue-400 border-blue-500/50' },
    { id: 'industrial', name: 'Modular Industrial', color: 'bg-purple-500/20 text-purple-400 border-purple-500/50' },
    { id: 'green', name: 'Eco-Park System', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50' },
  ];

  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight flex items-center gap-2">
            <Building2 className="w-8 h-8 text-cyan-400" />
            Urban Planning & Architecture
          </h1>
          <p className="text-white/50 mt-1">Design and simulate future city environments.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="bg-white/5 border-white/10 text-white hover:bg-white/10">
            <Layers className="w-4 h-4 mr-2" />
            Layers
          </Button>
          <Button className="bg-cyan-600 hover:bg-cyan-500 text-white">
            <Box className="w-4 h-4 mr-2" />
            Deploy Design
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 bg-black/40 border-white/10 backdrop-blur-xl overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/7778d949-f36d-490f-95b2-02ff78145875/urban-planning-visualization-756d20bd-1781476600079.webp" 
            alt="Urban Planning"
            className="w-full h-[500px] object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Badge className="bg-cyan-500 text-white border-none mb-2">Live Simulation</Badge>
                <h3 className="text-xl font-bold text-white">Central District Alpha-7</h3>
                <p className="text-white/60 text-sm">Real-time demographic and energy flow visualization active.</p>
              </div>
              <div className="flex gap-4">
                <div className="text-center">
                  <p className="text-xs text-white/40 uppercase">Density</p>
                  <p className="text-lg font-mono text-cyan-400">84%</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-white/40 uppercase">Efficiency</p>
                  <p className="text-lg font-mono text-emerald-400">92%</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Overlay Interactive Grid Mockup */}
          <div className="absolute inset-0 flex items-center justify-center z-15 pointer-events-none">
            <div className="w-full h-full border border-cyan-500/10 grid grid-cols-12 grid-rows-12 opacity-30">
              {Array.from({ length: 144 }).map((_, i) => (
                <div key={i} className="border-[0.5px] border-cyan-500/5" />
              ))}
            </div>
          </div>
        </Card>

        <div className="space-y-6">
          <Card className="bg-black/40 border-white/10 backdrop-blur-xl p-6 space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Grid3X3 className="w-5 h-5 text-cyan-400" />
              Zoning Controller
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {zones.map((zone) => (
                <button
                  key={zone.id}
                  onClick={() => setSelectedZone(zone.id)}
                  className={cn(
                    "flex items-center justify-between p-4 rounded-xl border transition-all text-left",
                    selectedZone === zone.id 
                      ? zone.color 
                      : "bg-white/5 border-white/5 text-white/60 hover:bg-white/10"
                  )}
                >
                  <span className="font-medium">{zone.name}</span>
                  {selectedZone === zone.id && <div className="w-2 h-2 rounded-full bg-current animate-pulse" />}
                </button>
              ))}
            </div>
          </Card>

          <Card className="bg-black/40 border-white/10 backdrop-blur-xl p-6 space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Ruler className="w-5 h-5 text-cyan-400" />
              Design Tools
            </h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-white/40">
                  <span>Structural Integrity</span>
                  <span className="text-cyan-400">98.2%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '98.2%' }}
                    className="h-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-white/40">
                  <span>Sustainable Materials</span>
                  <span className="text-emerald-400">76%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '76%' }}
                    className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                  />
                </div>
              </div>
              <Button variant="ghost" className="w-full text-white/40 hover:text-white hover:bg-white/5">
                Open Blueprint Editor
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
