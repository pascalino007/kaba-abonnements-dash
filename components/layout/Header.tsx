import React from 'react';
import { Bell, Search, User, Settings, Menu, X } from 'lucide-react';
import { useMobileMenu } from '../../contexts/MobileMenuContext';

const Header: React.FC = () => {
  const { isMobileMenuOpen, toggleMobileMenu } = useMobileMenu();
  return (
    <header className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between">
        {/* Logo et titre */}
        <div className="flex items-center space-x-3">
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden w-8 h-8 bg-[#CD1F45] rounded-lg flex items-center justify-center hover:bg-[#b01a3a] transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-4 h-4 text-white" />
            ) : (
              <Menu className="w-4 h-4 text-white" />
            )}
          </button>
          <div className="hidden lg:flex w-8 h-8 bg-[#CD1F45] rounded-lg items-center justify-center">
            <span className="text-white font-bold text-sm">K</span>
          </div>
          <h1 className="hidden sm:block text-xl font-semibold text-gray-800">Kaba Abonnements</h1>
        </div>

        {/* Barre de recherche */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Rechercher clients, abonnements..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Actions utilisateur */}
        <div className="flex items-center space-x-2 lg:space-x-4">
          <button className="relative p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>
          
          <button className="hidden sm:block p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors">
            <Settings className="w-5 h-5" />
          </button>
          
          <div className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors">
            <div className="w-8 h-8 bg-[#CD1F45] from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <span className="hidden sm:block text-sm font-medium text-gray-700">Admin</span>
          </div>
        </div>
             </div>
     </header>
   );
};

export default Header;
