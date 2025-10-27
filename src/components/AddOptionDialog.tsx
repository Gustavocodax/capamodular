import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

interface AddOptionDialogProps {
  onAdd: (option: {
    name: string;
    description: string;
    price: number;
  }) => Promise<string>;
}

export function AddOptionDialog({ onAdd }: AddOptionDialogProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.description || !formData.price) {
      alert('Preencha todos os campos');
      return;
    }

    try {
      setLoading(true);
      const priceValue = parseFloat(
        formData.price.replace('R$', '').replace(/\./g, '').replace(',', '.')
      );
      await onAdd({
        name: formData.name,
        description: formData.description,
        price: priceValue,
      });
      
      // Limpar formulário e fechar dialog
      setFormData({ name: '', description: '', price: '' });
      setOpen(false);
    } catch (error) {
      console.error('Erro ao adicionar opção:', error);
      alert('Erro ao adicionar opção. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Adicionar Nova Opção
        </Button>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Adicionar Nova Opção</DialogTitle>
            <DialogDescription>
              Preencha os dados da nova opção de personalização
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome da Opção</Label>
              <Input
                id="name"
                placeholder="Ex: Capa Premium"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Descrição</Label>
              <Textarea
                id="description"
                placeholder="Descreva os detalhes da opção..."
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                required
                rows={3}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="price">Preço (R$)</Label>
              <Input
                id="price"
                type="text"
                placeholder="R$ 0,00"
                value={formData.price}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '');
                  const number = parseFloat(value) / 100;
                  const formatted = number.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  });
                  setFormData({ ...formData, price: formatted });
                }}
                required
              />
            </div>
          </div>
          
          <DialogFooter className="gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              disabled={loading}
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? 'Adicionando...' : 'Adicionar Opção'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
