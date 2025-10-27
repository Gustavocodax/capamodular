import { useState, useMemo, useEffect } from 'react';
import { OptionsSelector, Option } from './components/OptionsSelector';
import { PriceDisplay } from './components/PriceDisplay';
import { ThemeToggle } from './components/ThemeToggle';
import { AdminPage } from './components/AdminPage';
import { GalaxyBackground } from './components/GalaxyBackground';
import { Button } from './components/ui/button';
import { Settings } from 'lucide-react';

const DEFAULT_OPTIONS: Option[] = [
  {
    id: 'capa-basica',
    name: 'Capa Básica',
    description: 'Capa simples em material resistente',
    price: 150.00
  },
  {
    id: 'capa-premium',
    name: 'Capa Premium',
    description: 'Capa de alta qualidade com acabamento especial',
    price: 350.00
  },
  {
    id: 'laminacao-fosca',
    name: 'Laminação Fosca',
    description: 'Acabamento fosco elegante e sofisticado',
    price: 80.00
  },
  {
    id: 'laminacao-brilho',
    name: 'Laminação com Brilho',
    description: 'Acabamento brilhante que destaca as cores',
    price: 80.00
  },
  {
    id: 'hot-stamping',
    name: 'Hot Stamping',
    description: 'Aplicação de detalhes em dourado ou prateado',
    price: 120.00
  },
  {
    id: 'verniz-localizado',
    name: 'Verniz Localizado',
    description: 'Verniz em áreas específicas para destaque',
    price: 95.00
  },
  {
    id: 'relevo',
    name: 'Relevo',
    description: 'Textura em relevo para um efeito tátil',
    price: 110.00
  },
  {
    id: 'corte-especial',
    name: 'Corte Especial',
    description: 'Corte personalizado não-retangular',
    price: 75.00
  },
  {
    id: 'material-reciclado',
    name: 'Material Reciclado',
    description: 'Opção sustentável com material reciclado',
    price: 50.00
  },
  {
    id: 'impressao-uv',
    name: 'Impressão UV',
    description: 'Impressão com tinta UV de alta durabilidade',
    price: 140.00
  }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<'configurator' | 'admin'>('configurator');
  const [availableOptions, setAvailableOptions] = useState<Option[]>(() => {
    const saved = localStorage.getItem('capa-modular-options');
    return saved ? JSON.parse(saved) : DEFAULT_OPTIONS;
  });
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  useEffect(() => {
    localStorage.setItem('capa-modular-options', JSON.stringify(availableOptions));
  }, [availableOptions]);

  const handleToggleOption = (optionId: string) => {
    setSelectedOptions((prev) =>
      prev.includes(optionId)
        ? prev.filter((id) => id !== optionId)
        : [...prev, optionId]
    );
  };

  const handleUpdateOptions = (newOptions: Option[]) => {
    setAvailableOptions(newOptions);
    // Remove seleções de opções que não existem mais
    setSelectedOptions((prev) =>
      prev.filter((id) => newOptions.some((opt) => opt.id === id))
    );
  };

  const selectedItems = useMemo(() => {
    return availableOptions.filter((option) =>
      selectedOptions.includes(option.id)
    ).map((option) => ({
      name: option.name,
      price: option.price
    }));
  }, [selectedOptions, availableOptions]);

  const total = useMemo(() => {
    return selectedItems.reduce((sum, item) => sum + item.price, 0);
  }, [selectedItems]);

  if (currentPage === 'admin') {
    return (
      <>
        <GalaxyBackground />
        <AdminPage
          options={availableOptions}
          onUpdateOptions={handleUpdateOptions}
          onBack={() => setCurrentPage('configurator')}
        />
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

          {/* Main Content */}
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
        </div>
      </div>
    </>
  );
}