import React from 'react';
import BottomSheet from 'bottom-sheet-react';

const Home: React.FC = () => {
  return (
    <div>
      <BottomSheet
        isExpandable={true}
        customHeight={200}
        // onClose={customCloseHandler}
      >
        {/* <ChildrenComponent/> */}
        <h1>test</h1>
      </BottomSheet>
    </div>
  );
};

export default Home;
