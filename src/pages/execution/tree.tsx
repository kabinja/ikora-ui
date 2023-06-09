import type React from 'react';
import { useParams } from 'react-router-dom';

const ExecutionTree: React.FC = () => {
  const { id } = useParams();
  return <h1>Execution Tree {id}</h1>;
};

export default ExecutionTree;
