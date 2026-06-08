import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, center = false, light = false }) => {
  return (
    <div className={`mb-12 max-w-3xl ${center ? 'mx-auto text-center' : 'text-left'}`}>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {subtitle && (
          <span className="text-sm font-semibold tracking-wider uppercase text-secondary-blue mb-2 block">
            {subtitle}
          </span>
        )}
        <h2 className={`text-3xl md:text-4xl font-bold tracking-tight ${light ? 'text-white' : 'text-primary-navy'}`}>
          {title}
        </h2>
        <div 
          className={`h-1 w-20 bg-secondary-blue mt-4 rounded-full ${center ? 'mx-auto' : ''}`}
        />
      </motion.div>
    </div>
  );
};

export default SectionTitle;
