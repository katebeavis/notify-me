import React from 'react';
import { motion } from 'framer-motion';

const NotificationContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, x: 300 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.8, x: 300 }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 40,
      }}
      positionTransition
    >
      {children}
    </motion.div>
  );
};

export default NotificationContainer;
