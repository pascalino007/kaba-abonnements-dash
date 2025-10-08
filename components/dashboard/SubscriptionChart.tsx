import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart
} from 'recharts';

const data = [
  { month: 'Jan', actifs: 120, inactifs: 20, nouveaux: 15 },
  { month: 'Fév', actifs: 135, inactifs: 18, nouveaux: 22 },
  { month: 'Mar', actifs: 150, inactifs: 25, nouveaux: 18 },
  { month: 'Avr', actifs: 165, inactifs: 22, nouveaux: 25 },
  { month: 'Mai', actifs: 180, inactifs: 28, nouveaux: 30 },
  { month: 'Jun', actifs: 195, inactifs: 30, nouveaux: 28 },
  { month: 'Jul', actifs: 210, inactifs: 35, nouveaux: 35 },
  { month: 'Aoû', actifs: 225, inactifs: 32, nouveaux: 40 },
  { month: 'Sep', actifs: 240, inactifs: 38, nouveaux: 45 },
  { month: 'Oct', actifs: 255, inactifs: 40, nouveaux: 50 },
  { month: 'Nov', actifs: 270, inactifs: 42, nouveaux: 55 },
  { month: 'Déc', actifs: 285, inactifs: 45, nouveaux: 60 },
];

const SubscriptionChart: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 lg:p-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 lg:mb-6 space-y-2 lg:space-y-0">
        <h3 className="text-lg font-semibold text-gray-900">Évolution des Abonnements</h3>
        <div className="flex items-center space-x-2 lg:space-x-4">
          <div className="flex items-center space-x-1 lg:space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-xs lg:text-sm text-gray-600">Actifs</span>
          </div>
          <div className="flex items-center space-x-1 lg:space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-xs lg:text-sm text-gray-600">Inactifs</span>
          </div>
          <div className="flex items-center space-x-1 lg:space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-xs lg:text-sm text-gray-600">Nouveaux</span>
          </div>
        </div>
      </div>
      
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="month" 
            stroke="#6b7280"
            fontSize={12}
          />
          <YAxis 
            stroke="#6b7280"
            fontSize={12}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          />
          <Area
            type="monotone"
            dataKey="actifs"
            stackId="1"
            stroke="#3b82f6"
            fill="#3b82f6"
            fillOpacity={0.6}
          />
          <Area
            type="monotone"
            dataKey="inactifs"
            stackId="1"
            stroke="#ef4444"
            fill="#ef4444"
            fillOpacity={0.6}
          />
          <Area
            type="monotone"
            dataKey="nouveaux"
            stackId="1"
            stroke="#10b981"
            fill="#10b981"
            fillOpacity={0.6}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SubscriptionChart;
