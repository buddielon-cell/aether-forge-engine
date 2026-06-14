import React from 'react';
import { Sidebar, Sector } from './components/modules/Sidebar';
import { UrbanModule } from './components/modules/UrbanModule';
import { InfrastructureModule } from './components/modules/InfrastructureModule';
import { AerospaceModule } from './components/modules/AerospaceModule';
import { AgricultureModule } from './components/modules/AgricultureModule';
import { Toaster } from '@/components/ui/sonner';

function App() {
  const [activeSector, setActiveSector] = React.useState<Sector>('urban');

  const renderModule = () => {
    switch (activeSector) {
      case 'urban':
        return <UrbanModule />;
      case 'infrastructure':
        return <InfrastructureModule />;
      case 'aerospace':
        return <AerospaceModule />;
      case 'agriculture':
        return <AgricultureModule />;
      default:
        return <UrbanModule />;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#050505] text-foreground font-sans selection:bg-cyan-500/30">
      <Sidebar activeSector={activeSector} onSectorChange={setActiveSector} />
      
      <main className="flex-1 overflow-y-auto bg-[radial-gradient(circle_at_top_right,rgba(20,20,30,1)_0%,rgba(5,5,5,1)_60%)] relative">
        {/* Background Grid Decoration */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        
        <div className="relative z-10">
          {renderModule()}
        </div>
      </main>

      <Toaster position="bottom-right" theme="dark" richColors />
    </div>
  );
}

export default App;
