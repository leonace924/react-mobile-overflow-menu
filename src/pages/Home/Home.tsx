import React, { useRef, useState, useEffect } from 'react';
import { Icon } from 'components/Icon/Icon';
import { Button } from 'components/Common/Common';
import SheetContent from 'components/SheetContent/SheetContent';
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { increment, setCount } from 'redux/slices/count/countSlice';
import { useTimer } from 'hooks/useTimer';
import ActionSheet, { ActionSheetRef } from 'actionsheet-react';

const Home: React.FC = () => {
  const ref = useRef<ActionSheetRef>();
  const [disableButton, setDisableButton] = useState(false);
  const dispatch = useAppDispatch();
  const clickCount = useAppSelector((state) => state.counter.value);
  let timerSec = useTimer(disableButton, 30);

  useEffect(() => {
    if (timerSec < 1) {
      setDisableButton(false);
    }
  }, [timerSec]);

  const handleOpen = () => {
    if (clickCount >= 2) {
      dispatch(setCount(0));
      setDisableButton(true);
    } else {
      dispatch(increment());
    }

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
    <div className="flex items-center min-h-screen bg-no-repeat bg-cover bg-hero">
      <div className="items-center flex-1 p-4">
        <Button
          icon={disableButton ? undefined : 'plus'}
          onClick={handleOpen}
          className="w-full"
          disabled={disableButton}
        >
          {disableButton ? `${timerSec} s` : 'Open'}
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
        <div className="h-screen-80">
          <div className="relative h-full px-8 pt-16 overflow-y-auto">
            <div className="fixed top-6 right-8">
              <div
                className="flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-gray"
                onClick={handleClose}
              >
                <Icon type="close" />
              </div>
            </div>

            <SheetContent />
          </div>
        </div>
      </ActionSheet>
    </div>
  );
};

export default Home;
