import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Trash2, ArrowLeft, Loader2 } from 'lucide-react';
import { AddOptionDialog } from './AddOptionDialog';
import { EditOptionDialog } from './EditOptionDialog';
import { useOptions } from '../hooks/useOptions';

interface AdminPageProps {
  onBack: () => void;
}

export function AdminPage({ onBack }: AdminPageProps) {
  const {
    options,
    loading,
    error,
    addOption,
    updateOption,
    deleteOption,
  } = useOptions();

  const handleDelete = async (id: string) => {
    if (confirm('Tem certeza que deseja excluir esta opção?')) {
      try {
        await deleteOption(id);
      } catch (error) {
        console.error('Erro ao deletar:', error);
        alert('Erro ao deletar opção. Tente novamente.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="mb-2 text-primary">Gerenciar Opções</h1>
            <p className="text-muted-foreground">
              Adicione, edite ou remova opções do configurador
            </p>
          </div>
          <Button onClick={onBack} variant="outline" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Configurador
          </Button>
        </div>

        {/* Add Button */}
        <div className="mb-8">
          <AddOptionDialog onAdd={addOption} />
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        )}

        {/* Error State */}
        {error && (
          <Card className="mb-8 border-destructive">
            <CardContent className="py-6 text-center text-destructive">
              <p>{error}</p>
            </CardContent>
          </Card>
        )}

        {/* Options List */}
        {!loading && !error && (
          <div className="space-y-4">
            {options.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center text-muted-foreground">
                  <p>Nenhuma opção cadastrada ainda.</p>
                  <p className="mt-2">Clique no botão acima para adicionar a primeira opção.</p>
                </CardContent>
              </Card>
            ) : (
              options.map((option) => (
                <Card
                  key={option.id}
                  className="transition-colors hover:border-primary/30"
                >
                  <CardContent className="py-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="mb-1">{option.name}</h3>
                        <p className="text-muted-foreground mb-2">
                          {option.description}
                        </p>
                        <p className="text-primary font-medium">
                          R$ {option.price.toFixed(2)}
                        </p>
                      </div>
                      <div className="flex gap-2 flex-shrink-0">
                        <EditOptionDialog
                          option={option}
                          onUpdate={updateOption}
                        />
                        <Button
                          onClick={() => handleDelete(option.id)}
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
