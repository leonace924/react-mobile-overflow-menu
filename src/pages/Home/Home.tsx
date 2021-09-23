import React, { useRef } from 'react';
import { Button } from 'components/Common/Common';
import { Icon } from 'components/Icon/Icon';
import ActionSheet, { ActionSheetRef } from 'actionsheet-react';

const Home: React.FC = () => {
  const ref = useRef<ActionSheetRef>();

  const handleOpen = () => {
    if (ref) {
      ref?.current?.open();
    }
  };

  const handleClose = () => {
    if (ref) {
      ref?.current?.close();
    }
  };

  return (
    <div className="flex items-center min-h-screen bg-hero">
      <div className="items-center flex-1 p-4">
        <Button icon="plus" onClick={handleOpen} className="w-full">
          Open
        </Button>
      </div>
      <ActionSheet
        ref={ref}
        bgStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
        sheetStyle={{
          boxShadow: '0px -8px 20px rgba(0, 0, 0, 0.1)',
          borderTopLeftRadius: '24px',
          borderTopRightRadius: '24px',
        }}
      >
        <div className="px-8 pt-6 h-screen-80">
          <div className="flex justify-end mb-2">
            <div
              className="flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-gray"
              onClick={handleClose}
            >
              <Icon type="close" />
            </div>
          </div>
        </div>
      </ActionSheet>
    </div>
  );
};

export default Home;
