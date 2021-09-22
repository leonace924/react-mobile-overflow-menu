import React, { useRef } from 'react';
import ActionSheet, { ActionSheetRef } from 'actionsheet-react';

const Home: React.FC = () => {
  const ref = useRef<ActionSheetRef>();
  // const [sheetShow, setSheetShow] = useState(false);

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
    <div>
      <button onClick={handleOpen}>Open</button>
      <button onClick={handleClose}>Close</button>
      <ActionSheet ref={ref}>
        <div>
          <h1>test</h1>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 mt-4">
            Button
          </button>
        </div>
      </ActionSheet>
    </div>
  );
};

export default Home;
