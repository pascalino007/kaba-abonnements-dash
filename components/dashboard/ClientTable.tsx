import React from 'react';
import { MoreVertical, Eye, Edit, Trash2 } from 'lucide-react';

interface Client {
  id: string;
  name: string;
  email: string;
  subscription: string;
  status: 'active' | 'inactive' | 'pending';
  startDate: string;
  endDate: string;
  amount: number;
}

const clients: Client[] = [
  {
    id: '1',
    name: 'GOMADO kokou',
    email: 'kokougomgom@gmail.com',
    subscription: 'Premium',
    status: 'active',
    startDate: '2024-01-15',
    endDate: '2024-12-15',
    amount: 99.99
  },
  {
    id: '2',
    name: 'Romaric Koffi',
    email: 'romaric.koffi@gmail.com',
    subscription: 'Standard',
    status: 'active',
    startDate: '2024-02-01',
    endDate: '2024-11-30',
    amount: 49.99
  },
  {
    id: '3',
    name: 'Pierre Durand',
    email: 'pierre.durand@email.com',
    subscription: 'Basic',
    status: 'inactive',
    startDate: '2024-01-01',
    endDate: '2024-03-01',
    amount: 29.99
  },

];

const ClientTable: React.FC = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'inactive':
        return 'bg-red-100 text-red-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Actif';
      case 'inactive':
        return 'Inactif';
      case 'pending':
        return 'En attente';
      default:
        return status;
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="px-4 lg:px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Clients et Abonnements</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Client
              </th>
              <th className="hidden md:table-cell px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Abonnement
              </th>
              <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Statut
              </th>
              <th className="hidden lg:table-cell px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date de Debut
              </th>
              <th className="hidden md:table-cell px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date de Fin
              </th>
              <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {clients.map((client) => (
              <tr key={client.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{client.name}</div>
                    <div className="text-sm text-gray-500">{client.email}</div>
                  </div>
                </td>
                <td className="hidden md:table-cell px-4 lg:px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-900">{client.subscription}</span>
                </td>
                <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(client.status)}`}>
                    {getStatusText(client.status)}
                  </span>
                </td>
                <td className="hidden lg:table-cell px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {new Date(client.endDate).toLocaleDateString('fr-FR')}
                </td>
                <td className="hidden md:table-cell px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {client.amount.toFixed(2)} XOF
                </td>
                <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex items-center space-x-1 lg:space-x-2">
                    <button className="text-blue-600 hover:text-blue-900 p-1 rounded">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="text-green-600 hover:text-green-900 p-1 rounded">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="text-red-600 hover:text-red-900 p-1 rounded">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientTable;
