import React, { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import { Plus, Filter, Search, Download } from "lucide-react";
import CreateSubscriptionModal from "../components/packs/CreateSubscriptionModal";
import ViewSubscriptionModal from "../components/packs/ViewSubscriptionModal";
import EditSubscriptionModal from "../components/packs/EditSubscriptionModal";
import axios from "axios";

const AbonnementsPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const [selectedAbonnement, setSelectedAbonnement] = useState<any>(null);
  const [editAbonnement, setEditAbonnement] = useState<any>(null);

  const [packs, setAbonnements] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // ✅ Store abonnement being deleted
  const [deleteAbonnement, setDeleteAbonnement] = useState<any>(null);



  const fetchAbonnements = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get("https://kaba-abn-api.kabatitude.com/dashboard/packs_admin");
        setAbonnements(response.data);
      } catch (err) {
        setError("Erreur lors du chargement des packs.");
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchAbonnements();
  }, []);

  // ✅ Delete handler
 const handleDelete = async (id: number) => {
  try {
    const response = await axios.delete(`kaba-abn-api.kabatitude.com/dashboard/delete/${id}`);

    if (response.status === 200 || response.status === 204) {
      alert("Pack deleted successfully!");
       window.location.reload();
    } else {
      alert("Failed to delete pack!");
     
    }
  } catch (err) {
    console.error("Delete error:", err);
    alert("Failed to delete pack!");
  }
};

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Liste des packs Disponibles</h1>
            <p className="text-gray-600 mt-1">Gérez tous vos packs disponibles</p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#CD1F45] hover:bg-[#b01a3a] text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Nouveau Pack</span>
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Rechercher un abonnement..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
              <span>Filtres</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Download className="w-4 h-4" />
              <span>Exporter</span>
            </button>
          </div>
        </div>

        {/* Table */}
         <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
  <div className="overflow-x-auto">
    <table className="w-full text-sm text-gray-700">
      {/* Sticky Header */}
      <thead className="bg-gray-100  top-0 z-10 shadow-sm">
        <tr>
          <th className="px-6 py-4 text-left font-semibold">ID</th>
          <th className="px-6 py-4 text-left font-semibold">Pack</th>
          <th className="px-6 py-4 text-left font-semibold">Statut</th>
          <th className="px-6 py-4 text-left font-semibold">Montant</th>
          <th className="px-6 py-4 text-left font-semibold">Rayon</th>
          <th className="px-6 py-4 text-left font-semibold">Livraisons</th>
          <th className="px-6 py-4 text-left font-semibold">Min. Commande</th>
          <th className="px-6 py-4 text-left font-semibold">Durée</th>
          <th className="px-6 py-4 text-left font-semibold">Partage</th>
          <th className="px-6 py-4 text-left font-semibold">Réduction</th>
          <th className="px-6 py-4 text-left font-semibold">Avantages</th>
          <th className="px-6 py-4 text-left font-semibold text-center">Actions</th>
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-200">
        {packs.length === 0 ? (
          <tr>
            <td colSpan={12} className="px-6 py-8 text-center text-gray-500">
              Aucun abonnement trouvé.
            </td>
          </tr>
        ) : (
          packs.map((abonnement, index) => (
            <tr
              key={abonnement.id}
              className={`transition-colors ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              } hover:bg-gray-100`}
            >
              <td className="px-6 py-4">{abonnement.id ?? "--"}</td>
              <td className="px-6 py-4 font-medium">{abonnement.name || "--"}</td>
              <td className="px-6 py-4">
                <span
                  className={`px-3 py-1 text-xs rounded-full font-medium ${
                    abonnement.is_active
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {abonnement.is_active ? "Actif" : "Inactif"}
                </span>
              </td>
              <td className="px-6 py-4">{abonnement.price || "—"}</td>
              <td className="px-6 py-4">{abonnement.radius_km ? abonnement.radius_km + " km" : "—"}</td>
              <td className="px-6 py-4">{abonnement.deliverylimit || "—"}</td>
              <td className="px-6 py-4">{abonnement.min_order_amount || "—"}</td>
              <td className="px-6 py-4">{abonnement.duration_days ? abonnement.duration_days + " jrs" : "—"}</td>
              <td className="px-6 py-4">{abonnement.is_shareable ? "Oui" : "Non"}</td>
              <td className="px-6 py-4">{abonnement.discount_on_order > 0 ? abonnement.discount_on_order + "%" : "—"}</td>
              <td className="px-6 py-4">{abonnement.other_benefits || "—"}</td>

              {/* Action buttons */}
              <td className="px-6 py-4 text-center">
                <div className="flex justify-center space-x-2">
                  <button
                    className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition"
                    onClick={() => {
                      setSelectedAbonnement(abonnement);
                      setViewModalOpen(true);
                    }}
                  >
                    Voir
                  </button>
                  <button
                    className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition"
                    onClick={() => {
                      setEditAbonnement(abonnement);
                      setEditModalOpen(true);
                    }}
                  >
                    Modifier
                  </button>
                  <button
                    className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition"
                    onClick={() => setDeleteAbonnement(abonnement)}
                  >
                    Supprimer
                  </button>
                </div>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  </div>
</div>


        {/* Delete Modal (ONE modal only) */}
        {deleteAbonnement && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-xl shadow-lg p-6 w-96">
              <h2 className="text-lg text-black font-semibold mb-4">Confirm Delete</h2>
              <p className="mb-6 text-black">
                Êtes-vous sûr de vouloir supprimer <b>{deleteAbonnement.name}</b> (ID: ) ?
              </p>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setDeleteAbonnement(null)}
                  className="px-4 py-2 text-black rounded-lg border border-gray-300 hover:bg-gray-100"
                >
                  Annuler
                </button>
                <button
                  onClick={() => {
                    handleDelete(deleteAbonnement.id);
                    setDeleteAbonnement(null);
                  }}
                  className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
                >
                  Supprimer
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Create Modal */}
        <CreateSubscriptionModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={(data) => {
            console.log("Nouvel abonnement:", data);
            alert("Abonnement créé avec succès!");
            setIsModalOpen(false);
          }}
        />

        {/* View Modal */}
        <ViewSubscriptionModal
          isOpen={viewModalOpen}
          onClose={() => setViewModalOpen(false)}
          abonnement={selectedAbonnement}
          onEdit={() => {
            setViewModalOpen(false);
            setEditAbonnement(selectedAbonnement);
            setEditModalOpen(true);
          }}
        />

        {/* Edit Modal */}
        <EditSubscriptionModal
          isOpen={editModalOpen}
          onClose={() => setEditModalOpen(false)}
          initialValues={editAbonnement}
          onSubmit={(data) => {
            console.log("Abonnement modifié:", data);
            alert("Abonnement modifié avec succès!");
            setEditModalOpen(false);
          }}
        />
      </div>
    </Layout>
  );
};

export default AbonnementsPage;
