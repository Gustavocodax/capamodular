import { useState, useEffect } from 'react';
import {
  getAllOptions,
  addOption,
  updateOption,
  deleteOption,
  Option,
} from '../services/optionsService';

export const useOptions = () => {
  const [options, setOptions] = useState<Option[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Carregar opções do Firebase
  const loadOptions = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getAllOptions();
      setOptions(data);
    } catch (err) {
      setError('Erro ao carregar opções');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Adicionar nova opção
  const handleAddOption = async (
    option: Omit<Option, 'id' | 'createdAt' | 'updatedAt'>
  ) => {
    try {
      setError(null);
      const id = await addOption(option);
      await loadOptions(); // Recarregar lista
      return id;
    } catch (err) {
      setError('Erro ao adicionar opção');
      console.error(err);
      throw err;
    }
  };

  // Atualizar opção existente
  const handleUpdateOption = async (
    id: string,
    option: Partial<Omit<Option, 'id' | 'createdAt' | 'updatedAt'>>
  ) => {
    try {
      setError(null);
      await updateOption(id, option);
      await loadOptions(); // Recarregar lista
    } catch (err) {
      setError('Erro ao atualizar opção');
      console.error(err);
      throw err;
    }
  };

  // Deletar opção
  const handleDeleteOption = async (id: string) => {
    try {
      setError(null);
      await deleteOption(id);
      await loadOptions(); // Recarregar lista
    } catch (err) {
      setError('Erro ao deletar opção');
      console.error(err);
      throw err;
    }
  };

  // Carregar opções ao montar o componente
  useEffect(() => {
    loadOptions();
  }, []);

  return {
    options,
    loading,
    error,
    addOption: handleAddOption,
    updateOption: handleUpdateOption,
    deleteOption: handleDeleteOption,
    refreshOptions: loadOptions,
  };
};
