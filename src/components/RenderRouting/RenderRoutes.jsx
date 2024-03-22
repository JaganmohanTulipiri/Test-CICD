import React, { useEffect, useState } from 'react';
import DummyModal from '../../features/authentication/components/DummyModal';
import SuperAdmin from '../../features/authentication/components/SuperAdmin';
import Teacher from '../../features/teacher/Fitness/Teacher';

const RenderRoutes = (props) => {
  const { role } = props;

  const [component, setComponent] = useState('');

  console.log(props, 'iam propssssss');

  useEffect(() => {
    setComponent(role);
  }, [props]);

  const componentsList = {
    Teacher: <Teacher />,
  };

  console.log(componentsList[component], 'componentsList[role]');

  return <>{componentsList[component]}</>;
};

export default RenderRoutes;
