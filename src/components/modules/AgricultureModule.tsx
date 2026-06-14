import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Droplets, Thermometer, CloudSun, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

export function AgricultureModule() {
  const [plots, setPlots] = React.useState(
    Array.from({ length: 16 }).map((_, i) => ({
      id: i,
      health: Math.floor(Math.random() * 40 + 60),
      growth: Math.floor(Math.random() * 100),
      type: i % 3 === 0 ? 'hydro' : i % 3 === 1 ? 'aeroponic' : 'vertical',
      status: Math.random() > 0.8 ? 'harvesting' : 'growing'
    }))
  );

  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight flex items-center gap-2">
            <Sprout className="w-8 h-8 text-emerald-400" />
            Future Agriculture
          </h1>
          <p className="text-white/50 mt-1">Smart farming, resource management, and automated harvesting.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="bg-white/5 border-white/10 text-white hover:bg-white/10">
            <Zap className="w-4 h-4 mr-2" />
            Automation
          </Button>
          <Button className="bg-emerald-600 hover:bg-emerald-500 text-white">
            <CloudSun className="w-4 h-4 mr-2" />
            Climate Control
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-black/40 border-white/10 backdrop-blur-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">Smart Plot Layout</h3>
              <div className="flex gap-2">
                <Badge variant="outline" className="text-white/40 border-white/10">16 Active Plots</Badge>
                <Badge className="bg-emerald-500 text-white border-none">Optimal Health</Badge>
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-4 aspect-square md:aspect-auto">
              {plots.map((plot) => (
                <motion.div
                  key={plot.id}
                  whileHover={{ scale: 1.05 }}
                  className={cn(
                    "aspect-square rounded-xl border p-2 flex flex-col justify-between transition-all cursor-pointer group",
                    plot.status === 'harvesting' 
                      ? "bg-emerald-500/20 border-emerald-500/50" 
                      : "bg-white/5 border-white/10 hover:border-emerald-500/30"
                  )}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono text-white/40">#{plot.id}</span>
                    {plot.status === 'harvesting' && <Zap className="w-3 h-3 text-emerald-400 animate-pulse" />}
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <Sprout className={cn(
                      "w-8 h-8 transition-colors",
                      plot.health > 80 ? "text-emerald-400" : "text-emerald-600/40"
                    )} />
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-[8px] uppercase tracking-tighter text-white/40">
                      <span>Growth</span>
                      <span>{plot.growth}%</span>
                    </div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500" style={{ width: `${plot.growth}%` }} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>

          <Card className="bg-black/40 border-white/10 backdrop-blur-xl relative overflow-hidden h-64">
             <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/7778d949-f36d-490f-95b2-02ff78145875/automated-agricultural-planning-ff18ff60-1781476600180.webp" 
              alt="Automated Agriculture"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-6 flex flex-col justify-end">
              <h4 className="text-xl font-bold text-white uppercase tracking-tight">Vertical Farm Alpha</h4>
              <p className="text-white/60 text-sm max-w-md">Integrating AI harvesting with real-time nutrient delivery systems.</p>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-black/40 border-white/10 backdrop-blur-xl p-6 space-y-8">
             <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Droplets className="w-5 h-5 text-emerald-400" />
              Resource Distribution
            </h3>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Water Reserves</span>
                  <span className="text-white">82%</span>
                </div>
                <Progress value={82} className="h-2 bg-white/5" indicatorClassName="bg-blue-500" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Nutrient Mix A-4</span>
                  <span className="text-white">64%</span>
                </div>
                <Progress value={64} className="h-2 bg-white/5" indicatorClassName="bg-emerald-500" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Energy Storage</span>
                  <span className="text-white">95%</span>
                </div>
                <Progress value={95} className="h-2 bg-white/5" indicatorClassName="bg-yellow-500" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-4 bg-white/5 rounded-2xl border border-white/5">
                <Thermometer className="w-5 h-5 text-orange-400 mx-auto mb-2" />
                <span className="text-xs text-white/40 block">Temp</span>
                <span className="text-lg font-mono text-white">24.5°C</span>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-2xl border border-white/5">
                <CloudSun className="w-5 h-5 text-yellow-400 mx-auto mb-2" />
                <span className="text-xs text-white/40 block">Humidity</span>
                <span className="text-lg font-mono text-white">62%</span>
              </div>
            </div>

            <Button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white border-none h-12">
              Initiate Harvesting Cycle
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
