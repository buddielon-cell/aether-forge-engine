import React from 'react';
import { motion } from 'framer-motion';
import { Map, Hammer, Waypoints, Activity, Compass } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

export function InfrastructureModule() {
  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight flex items-center gap-2">
            <Map className="w-8 h-8 text-orange-400" />
            Infrastructure & Transport
          </h1>
          <p className="text-white/50 mt-1">Global logistics, road construction, and bridge engineering.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="bg-white/5 border-white/10 text-white hover:bg-white/10">
            <Waypoints className="w-4 h-4 mr-2" />
            Map View
          </Button>
          <Button className="bg-orange-600 hover:bg-orange-500 text-white">
            <Hammer className="w-4 h-4 mr-2" />
            New Project
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Card className="lg:col-span-3 bg-black/40 border-white/10 backdrop-blur-xl overflow-hidden relative group">
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/7778d949-f36d-490f-95b2-02ff78145875/infrastructure-construction-planning-4fdfb3f0-1781476600260.webp" 
            alt="Infrastructure Planning"
            className="w-full h-[550px] object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-end p-8">
            <Badge className="w-fit bg-orange-500 text-white mb-4">Phase: Execution</Badge>
            <h2 className="text-4xl font-bold text-white mb-2 uppercase tracking-tighter">Maglev Bridge System</h2>
            <p className="text-white/70 max-w-xl mb-6">
              Connecting the Eastern Aerospace Hub with the Central Urban Grid via high-speed vacuum tube logistics.
            </p>
            <div className="flex gap-8 border-t border-white/10 pt-6">
              <div>
                <p className="text-xs text-white/40 uppercase mb-1">Completion</p>
                <p className="text-2xl font-mono text-orange-400">62.5%</p>
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase mb-1">Resource Flow</p>
                <p className="text-2xl font-mono text-emerald-400">OPTIMAL</p>
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase mb-1">Est. Opening</p>
                <p className="text-2xl font-mono text-white">Q4 2084</p>
              </div>
            </div>
          </div>
        </Card>

        <div className="space-y-6">
          <Card className="bg-black/40 border-white/10 backdrop-blur-xl p-6 space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Activity className="w-5 h-5 text-orange-400" />
              Active Projects
            </h3>
            <div className="space-y-4">
              {[
                { name: 'Hyper-Road 101', progress: 45, status: 'On Track' },
                { name: 'Neo-Airport Alpha', progress: 88, status: 'Finalizing' },
                { name: 'District Bridge 7', progress: 12, status: 'Foundation' },
              ].map((project) => (
                <div key={project.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/80">{project.name}</span>
                    <span className="text-orange-400">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-1.5 bg-white/5" indicatorClassName="bg-orange-500" />
                  <p className="text-[10px] text-white/40 uppercase tracking-widest">{project.status}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="bg-orange-500/10 border-orange-500/20 backdrop-blur-xl p-6 text-center space-y-4">
            <div className="mx-auto w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
              <Compass className="w-6 h-6 text-orange-400 animate-spin-slow" />
            </div>
            <div>
              <h4 className="text-white font-medium">Navigational Sync</h4>
              <p className="text-white/50 text-xs mt-1">All ground transport modules synced with aerospace corridors.</p>
            </div>
            <Button size="sm" variant="ghost" className="text-orange-400 hover:text-orange-300 hover:bg-white/5 w-full">
              Recalibrate Paths
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
