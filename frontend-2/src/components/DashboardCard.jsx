import { motion } from 'framer-motion';

const DashboardCard = ({ title, value, icon: Icon, colorClass = "bg-blue-50 text-secondary-blue", detail }) => {
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm flex items-center justify-between text-left relative overflow-hidden group hover:shadow-md transition-shadow"
    >
      <div className="space-y-2">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block font-sans">
          {title}
        </span>
        <span className="text-3xl font-extrabold text-primary-navy font-display block">
          {value}
        </span>
        {detail && (
          <span className="text-xs text-slate-500 block font-sans">
            {detail}
          </span>
        )}
      </div>

      <div className={`p-4 rounded-2xl ${colorClass} shrink-0 transition-transform group-hover:scale-110 duration-300`}>
        <Icon className="h-6 w-6" />
      </div>
    </motion.div>
  );
};

export default DashboardCard;
