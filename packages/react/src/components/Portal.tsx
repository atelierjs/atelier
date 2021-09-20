import React, { useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export type PortalProps = {
  elementId: string;
};

const Portal: React.FC<PortalProps> = ({ children, elementId }) => {
  const [container, setContainer] = useState<Element>();

  useLayoutEffect(() => {
    const root = document.getElementById('root') || document.body;

    let portal = document.getElementById(elementId);
    if (!portal) {
      portal = document.createElement('div');
      portal.id = elementId;
    }
    root.appendChild(portal);
    setContainer(portal);
  }, [elementId]);

  return container ? createPortal(children, container) : null;
};

export default Portal;
