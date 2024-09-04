import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import FormBuilderArea from './pages/FormBuilderArea';
import { Sidebar } from './pages/SideBar';

const App: React.FC = () => {
  return (
    <div style={{flex:1,minHeight:800,backgroundColor:'yellow',marginTop:-21,padding:20 }}>
      <DndProvider backend={HTML5Backend}>
        <h1 style={{marginLeft:16}}>Form Builder</h1>
        <div style={{ display: 'flex'}}>
          <Sidebar />
          <FormBuilderArea />
        </div>
      </DndProvider>
    </div>
  );
};

export default App;
