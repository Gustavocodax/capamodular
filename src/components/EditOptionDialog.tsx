import { useState, useEffect } from 'react';
import { Pencil } from 'lucide-react';
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
import { Option } from '../services/optionsService';

interface EditOptionDialogProps {
  option: Option;
  onUpdate: (id: string, data: {
    name: string;
    description: string;
    price: number;
  }) => Promise<void>;
}

export function EditOptionDialog({ option, onUpdate }: EditOptionDialogProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: option.name,
    description: option.description,
    price: option.price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }),
  });

  // Atualizar form quando a opção mudar
  useEffect(() => {
    setFormData({
      name: option.name,
      description: option.description,
      price: option.price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }),
    });
  }, [option]);

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
      await onUpdate(option.id, {
        name: formData.name,
        description: formData.description,
        price: priceValue,
      });
      
      setOpen(false);
    } catch (error) {
      console.error('Erro ao atualizar opção:', error);
      alert('Erro ao atualizar opção. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
          <Pencil className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Editar Opção</DialogTitle>
            <DialogDescription>
              Atualize os dados da opção de personalização
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="edit-name">Nome da Opção</Label>
              <Input
                id="edit-name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="edit-description">Descrição</Label>
              <Textarea
                id="edit-description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                required
                rows={3}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="edit-price">Preço (R$)</Label>
              <Input
                id="edit-price"
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
              {loading ? 'Salvando...' : 'Salvar Alterações'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
