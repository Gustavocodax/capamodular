import { useState, useMemo, useEffect } from 'react';
import { OptionsSelector } from './components/OptionsSelector';
import { PriceDisplay } from './components/PriceDisplay';
import { ThemeToggle } from './components/ThemeToggle';
import { AdminPage } from './components/AdminPage';
import { LoginPage } from './components/LoginPage';
import { GalaxyBackground } from './components/GalaxyBackground';
import { Logo } from './components/Logo';
import { Loader2 } from 'lucide-react';
import { useOptions } from './hooks/useOptions';
import { useAuth } from './hooks/useAuth';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'configurator' | 'admin'>('configurator');
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const { user, loading: authLoading } = useAuth();

  // Detectar rota pela URL
  useEffect(() => {
    const checkRoute = () => {
      const hash = window.location.hash.slice(1); // Remove o #
      if (hash === '/admin') {
        setCurrentPage('admin');
      } else {
        setCurrentPage('configurator');
      }
    };

    checkRoute();
    window.addEventListener('hashchange', checkRoute);
    return () => window.removeEventListener('hashchange', checkRoute);
  }, []);

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

  // Loading da autenticação
  if (authLoading) {
    return (
      <>
        <GalaxyBackground />
        <div className="min-h-screen bg-background flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </>
    );
  }

  // Se está na página admin mas não está logado, mostra login
  if (currentPage === 'admin' && !user) {
    return (
      <>
        <GalaxyBackground />
        <LoginPage />
      </>
    );
  }

  // Se está na página admin e está logado, mostra admin
  if (currentPage === 'admin' && user) {
    return (
      <>
        <GalaxyBackground />
        <AdminPage onBack={() => {
          window.location.hash = '#/';
          setCurrentPage('configurator');
        }} />
      </>
    );
  }

  return (
    <>
      <GalaxyBackground />
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <Logo size="md" />
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
