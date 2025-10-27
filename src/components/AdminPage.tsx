import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader } from './ui/card';
import { Pencil, Trash2, Plus, X } from 'lucide-react';
import { Option } from './OptionsSelector';

interface AdminPageProps {
  options: Option[];
  onUpdateOptions: (options: Option[]) => void;
  onBack: () => void;
}

export function AdminPage({ options, onUpdateOptions, onBack }: AdminPageProps) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: ''
  });

  // Função para formatar o valor como moeda
  const formatCurrency = (value: string): string => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, '');
    
    if (!numbers) return '';
    
    // Converte para número e divide por 100 para ter os centavos
    const amount = parseInt(numbers) / 100;
    
    // Formata como moeda brasileira com R$
    return `R$ ${amount.toFixed(2)}`;
  };

  // Função para lidar com a mudança no campo de preço
  const handlePriceChange = (value: string) => {
    const formatted = formatCurrency(value);
    setFormData({ ...formData, price: formatted });
  };

  const handleStartEdit = (option: Option) => {
    setEditingId(option.id);
    setFormData({
      name: option.name,
      description: option.description,
      price: `R$ ${option.price.toFixed(2)}`
    });
    setIsAdding(false);
  };

  const handleStartAdd = () => {
    setIsAdding(true);
    setEditingId(null);
    setFormData({
      name: '',
      description: '',
      price: ''
    });
  };

  const handleSave = () => {
    const price = parseFloat(formData.price.replace('R$ ', ''));
    if (!formData.name || !formData.description || isNaN(price) || price < 0) {
      alert('Por favor, preencha todos os campos corretamente');
      return;
    }

    if (isAdding) {
      const newOption: Option = {
        id: `option-${Date.now()}`,
        name: formData.name,
        description: formData.description,
        price: price
      };
      onUpdateOptions([...options, newOption]);
    } else if (editingId) {
      const updatedOptions = options.map((opt) =>
        opt.id === editingId
          ? { ...opt, name: formData.name, description: formData.description, price: price }
          : opt
      );
      onUpdateOptions(updatedOptions);
    }

    handleCancel();
  };

  const handleDelete = (id: string) => {
    if (confirm('Tem certeza que deseja excluir esta opção?')) {
      onUpdateOptions(options.filter((opt) => opt.id !== id));
    }
  };

  const handleCancel = () => {
    setIsAdding(false);
    setEditingId(null);
    setFormData({ name: '', description: '', price: '' });
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
          <Button onClick={onBack} variant="outline">
            Voltar ao Configurador
          </Button>
        </div>

        {/* Add/Edit Form */}
        {(isAdding || editingId) && (
          <Card className="mb-8 border-primary/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <h2 className="text-primary">
                  {isAdding ? 'Adicionar Nova Opção' : 'Editar Opção'}
                </h2>
                <Button onClick={handleCancel} variant="ghost" size="sm">
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome da Opção</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ex: Capa Premium"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Descrição</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Ex: Capa de alta qualidade com acabamento especial"
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="price">Preço</Label>
                <Input
                  id="price"
                  type="text"
                  value={formData.price}
                  onChange={(e) => handlePriceChange(e.target.value)}
                  placeholder="R$ 0.00"
                />
              </div>
              <div className="flex gap-2">
                <Button onClick={handleSave} className="flex-1">
                  {isAdding ? 'Adicionar' : 'Salvar Alterações'}
                </Button>
                <Button onClick={handleCancel} variant="outline">
                  Cancelar
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Add Button */}
        {!isAdding && !editingId && (
          <Button onClick={handleStartAdd} className="mb-8 w-full sm:w-auto">
            <Plus className="w-4 h-4 mr-2" />
            Adicionar Nova Opção
          </Button>
        )}

        {/* Options List */}
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
                      <p className="text-muted-foreground mb-2">{option.description}</p>
                      <p className="text-primary">
                        R$ {option.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <Button
                        onClick={() => handleStartEdit(option)}
                        variant="outline"
                        size="sm"
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        onClick={() => handleDelete(option.id)}
                        variant="outline"
                        size="sm"
                      >
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
}