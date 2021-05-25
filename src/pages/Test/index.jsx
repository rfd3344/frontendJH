
import React, { memo, useState, useEffect, useCallback, useMemo } from 'react'
import Dialog from '@/components/Dialog';

const Test = () => {
  const handleSave = (e) => {
    console.warn('handleSave', e)
  };

  return (
    <div>
      <Dialog title="hereIs the title" onSave={handleSave}>
        {(Button, Contents) => (
          <>
            <Button> Button1 </Button>
            <Contents>
              <div>
                11111
              </div>
            </Contents>
          </>
        )}
      </Dialog>
    </div>
  );
};

export default Test