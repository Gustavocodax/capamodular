import { useState } from 'react';
import { Checkbox } from './ui/checkbox';
import { Card, CardContent } from './ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Info } from 'lucide-react';

export interface Option {
  id: string;
  name: string;
  description: string;
  price: number;
}

interface OptionsSelectorProps {
  options: Option[];
  selectedOptions: string[];
  onToggleOption: (optionId: string) => void;
}

export function OptionsSelector({ options, selectedOptions, onToggleOption }: OptionsSelectorProps) {
  const [selectedOptionForDetails, setSelectedOptionForDetails] = useState<Option | null>(null);

  const handleCardClick = (option: Option, e: React.MouseEvent<HTMLDivElement>) => {
    // Se clicar no ícone de info, abre o modal
    const target = e.target as HTMLElement;
    if (target.closest('.info-icon')) {
      e.stopPropagation();
      setSelectedOptionForDetails(option);
    } else {
      // Senão, seleciona/deseleciona a opção
      onToggleOption(option.id);
    }
  };

  return (
    <>
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-3">
          {options.map((option) => {
            const isSelected = selectedOptions.includes(option.id);
            
            return (
              <Card
                key={option.id}
                className={`cursor-pointer transition-all border hover:border-primary/30 dark:hover:border-primary/40 ${
                  isSelected 
                    ? 'border-primary/50 bg-accent dark:bg-accent dark:border-primary/60' 
                    : 'dark:border-muted dark:bg-card'
                }`}
                onClick={(e) => handleCardClick(option, e)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <Checkbox
                      id={option.id}
                      checked={isSelected}
                      onCheckedChange={() => onToggleOption(option.id)}
                      onClick={(e: React.MouseEvent) => e.stopPropagation()}
                    />
                    
                    <div className="flex-1 min-w-0 flex items-center gap-2">
                      <div className="text-base font-medium text-foreground">{option.name}</div>
                      <button
                        className="info-icon p-1 hover:bg-primary/10 rounded transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedOptionForDetails(option);
                        }}
                        type="button"
                      >
                        <Info className="w-4 h-4 text-primary" />
                      </button>
                    </div>
                    
                    <div className="text-base font-medium text-foreground shrink-0">
                      + R$ {option.price.toFixed(2)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <Dialog open={!!selectedOptionForDetails} onOpenChange={(open: boolean) => !open && setSelectedOptionForDetails(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-primary break-words">{selectedOptionForDetails?.name}</DialogTitle>
            <DialogDescription className="break-words">
              Detalhes da opção selecionada
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-foreground leading-relaxed break-words">
              {selectedOptionForDetails?.description}
            </p>
            <div className="pt-4 border-t border-border">
              <p className="text-muted-foreground">
                Valor adicional:
              </p>
              <p className="font-medium text-foreground mt-1">
                R$ {selectedOptionForDetails?.price.toFixed(2)}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}