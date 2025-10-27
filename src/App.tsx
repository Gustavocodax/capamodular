import { useState, useMemo } from 'react';
import { OptionsSelector } from './components/OptionsSelector';
import { PriceDisplay } from './components/PriceDisplay';
import { ThemeToggle } from './components/ThemeToggle';
import { AdminPage } from './components/AdminPage';
import { GalaxyBackground } from './components/GalaxyBackground';
import { Button } from './components/ui/button';
import { Settings, Loader2 } from 'lucide-react';
import { useOptions } from './hooks/useOptions';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'configurator' | 'admin'>('configurator');
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  
  // Buscar opções do Firebase
  const { options: availableOptions, loading, error } = useOptions();

  const handleToggleOption = (optionId: string) => {
    setSelectedOptions((prev) =>
      prev.includes(optionId)
        ? prev.filter((id) => id !== optionId)
        : [...prev, optionId]
    );
  };

  const selectedItems = useMemo(() => {
    return availableOptions
      .filter((option) => selectedOptions.includes(option.id))
      .map((option) => ({
        name: option.name,
        price: option.price,
      }));
  }, [selectedOptions, availableOptions]);

  const total = useMemo(() => {
    return selectedItems.reduce((sum, item) => sum + item.price, 0);
  }, [selectedItems]);

  if (currentPage === 'admin') {
    return (
      <>
        <GalaxyBackground />
        <AdminPage onBack={() => setCurrentPage('configurator')} />
      </>
    );
  }

  return (
    <>
      <GalaxyBackground />
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
          {/* Header */}
          <div className="mb-8 flex items-end justify-end gap-2">
            <Button
              onClick={() => setCurrentPage('admin')}
              variant="outline"
              size="sm"
            >
              <Settings className="w-4 h-4 mr-2" />
              Gerenciar Opções
            </Button>
            <ThemeToggle />
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="bg-destructive/10 border border-destructive text-destructive px-4 py-3 rounded mb-8">
              <p>{error}</p>
            </div>
          )}

          {/* Main Content */}
          {!loading && !error && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Side - Options */}
              <div className="lg:col-span-2">
                <OptionsSelector
                  options={availableOptions}
                  selectedOptions={selectedOptions}
                  onToggleOption={handleToggleOption}
                />
              </div>

              {/* Right Side - Price Display */}
              <div className="lg:col-span-1">
                <PriceDisplay total={total} selectedItems={selectedItems} />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
