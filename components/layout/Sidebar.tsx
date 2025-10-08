import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { 
  LayoutDashboard, 
  Users, 
  BarChart3, 
  CreditCard, 
  Settings, 
  FileText,
  TrendingUp,
  LogOut
} from 'lucide-react';
import { useMobileMenu } from '../../contexts/MobileMenuContext';

interface SidebarItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const sidebarItems: SidebarItem[] = [
  /* { name: 'Dashboard', href: '/', icon: LayoutDashboard }, */
  { name: 'Pack Abonnement', href: '/pack_abonnements', icon:BarChart3  },
  { name: 'Gerer', href: '/abonnement_data', icon: CreditCard },
/*   { name: 'Clients', href: '/clients', icon: Users },  */
  { name: 'Statistiques', href: '/statistiques', icon: BarChart3 },
/*   { name: 'Rapports', href: '/rapports', icon: FileText },
  { name: 'Analytics', href: '/analytics', icon: TrendingUp }, */
];

const Sidebar: React.FC = () => {
  const router = useRouter();
  const { isMobileMenuOpen, closeMobileMenu } = useMobileMenu();

  return (
    <>
      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMobileMenu}
        />
      )}

      {/* Sidebar */}
      <aside className={`${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0 z-50 transition-transform duration-300 ease-in-out`}>
        <div className="p-4 lg:p-6 pt-16 lg:pt-6">
          {/* Logo */}
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-[#CD1F45] rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-800">Kaba</h2>
              <p className="text-xs text-gray-500">Abonnements</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {sidebarItems.map((item) => {
              const isActive = router.pathname === item.href;
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-[#CD1F45] text-white border-r-2 border-[#CD1F45]'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Section Settings */}
         {/*  <div className="mt-8 pt-6 border-t border-gray-200">
            <Link
              href="/settings"
              onClick={closeMobileMenu}
              className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-800 rounded-lg transition-colors"
            >
              <Settings className="w-5 h-5 text-gray-500" />
              <span className="font-medium">Paramètres</span>
            </Link>
          </div> */}

          <div className="mt-8 pt-6 border-t border-gray-200">
            <Link
              href="/logout"
              onClick={closeMobileMenu}
              className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-800 rounded-lg transition-colors"
            >
              <LogOut className="w-5 h-5 text-gray-500" />
              <span className="font-medium">Déconnexion</span>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
