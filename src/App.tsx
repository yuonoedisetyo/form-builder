import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import FormBuilderArea from './pages/FormBuilderArea';
import { Sidebar } from './pages/SideBar';

const App: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <FormBuilderArea />
      </div>
    </DndProvider>
  );
};

export default App;
