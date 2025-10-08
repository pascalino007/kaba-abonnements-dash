import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import StatCard from '../components/dashboard/StatCard';
import SubscriptionChart from '../components/dashboard/SubscriptionChart';
import ClientTable from '../components/dashboard/ClientTable';
import { Users, CreditCard, TrendingUp, DollarSign } from 'lucide-react';
import { useRouter } from 'next/router';

const Dashboard: React.FC = () => {
   const router = useRouter();

  useEffect(() => {
    
    const token = localStorage.getItem('token');
    if (!token) {
      router.replace('/login');
    }
  }, [router]);
  return (
    <Layout>
      <div className="space-y-6">
        {/* En-tête du dashboard */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Vue d'ensemble de vos abonnements et clients</p>
        </div>

        {/* Cartes de statistiques */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <StatCard
            title=" Clients avec Abonnement"
            value="0"
            change="+12% ce mois"
            changeType="positive"
            icon={Users}
            color="blue"
          />
          <StatCard
            title="Abonnements Actifs"
            value="0"
            change="+8% ce mois"
            changeType="positive"
            icon={CreditCard}
            color="green"
          />
         
        </div>

        {/* Graphique et tableau */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <SubscriptionChart />
          
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Répartition par Service</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  <span className="text-sm text-gray-700">Service Premium</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">0%</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span className="text-sm text-gray-700">Service Standard</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">0%</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-purple-500 rounded"></div>
                  <span className="text-sm text-gray-700">Service Basic</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">0%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tableau des clients */}
        <ClientTable />
      </div>
    </Layout>
  );
};

export default Dashboard;
