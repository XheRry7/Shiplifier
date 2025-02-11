import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/Button';
import { Box } from './Box';
import { useGridState } from '../hooks/useGridState';

export const GridContainer = () => {
  const { boxes, clickHistory, handleBoxClick, reset } = useGridState();
  const [isResetting, setIsResetting] = useState(false);

  const handleReset = () => {
    setIsResetting(true);
    setTimeout(() => {
      reset();
      setIsResetting(false);
    }, clickHistory.length * 500 + 500);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardContent className="p-4 md:p-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 mb-6">
          {boxes.map((box) => (
            <Box
              key={box.id}
              {...box}
              onClick={() => !isResetting && handleBoxClick(box.id)}
              isResetting={isResetting}
              resetOrder={box.clickOrder ?? 0}
            />
          ))}
        </div>
        <Button
          onClick={handleReset}
          disabled={isResetting || clickHistory.length === 0}
          className="w-full md:w-48 mx-auto block"
        >
          Reset
        </Button>
      </CardContent>
    </Card>
  );
};