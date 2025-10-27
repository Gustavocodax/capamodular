import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';

interface PriceDisplayProps {
  total: number;
  selectedItems: Array<{ name: string; price: number }>;
}

export function PriceDisplay({ total, selectedItems }: PriceDisplayProps) {
  return (
    <Card className="sticky top-8 h-fit">
      <CardHeader>
        <CardTitle className="text-primary">Resumo do Orçamento</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-3">
          {selectedItems.length > 0 ? (
            selectedItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: index * 0.05 }}
                className="flex justify-between items-center"
              >
                <span className="text-sm">{item.name}</span>
                <span className="text-sm text-foreground">
                  R$ {item.price.toFixed(2)}
                </span>
              </motion.div>
            ))
          ) : (
            <p className="text-sm text-muted-foreground text-center py-8">
              Selecione as opções ao lado
            </p>
          )}
        </div>

        {selectedItems.length > 0 && (
          <>
            <Separator />

            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Total:</span>
              <motion.div
                key={total}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-2xl font-semibold" style={{ color: '#16a34a' }}>
                  R$ {total.toFixed(2)}
                </span>
              </motion.div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}