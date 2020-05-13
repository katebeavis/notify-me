import { useEffect, useState } from 'react';

const useCreateDomElement = () => {
  const [domElement, setDomElement] = useState<any>(null);

  useEffect(() => {
    const element = document.createElement('div');
    document.body.appendChild(element);
    setDomElement(element);

    return () => {
      document.body.removeChild(element);
    };
  }, []);

  return domElement;
};

export default useCreateDomElement;
