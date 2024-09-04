import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableComponent: React.FC<{ component: string }> = ({ component }) => {
  const [, drag] = useDrag(() => ({
    type: 'component',
    item: { component },
  }));

  return (
    <div ref={drag} style={{ padding: '8px', margin: '4px', border: '1px solid black' }}>
      {component}
    </div>
  );
};

export const Sidebar: React.FC = () => {
  return (
    <div style={{ width: '200px', padding: '16px', }}>
      <DraggableComponent component="Label" />
      <DraggableComponent component="Text Input" />
      <DraggableComponent component="Checkbox" />
      <DraggableComponent component="Radio Button" />
      <DraggableComponent component="Button" />
      {/* Add more draggable components as needed */}
    </div>
  );
};
