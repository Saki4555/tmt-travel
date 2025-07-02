



import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import useTravelDealsData from "../hooks/userTravelDealsData";

import { DataLoading,    DeleteConfirmationModal,    EditDealsModal } from "../components";
import TitleProvider from "../providers/TitleProvider";

// Function to format date
const formatDate = (dateString) => {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(new Date(dateString));
};

const ManageDeals = () => {
  const { data: deals = [], isLoading, isError, error, refetch } = useTravelDealsData();
  console.log(deals);
  const queryClient = useQueryClient();

  // Modal State
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedDeal, setSelectedDeal] = useState(null);

  // Delete Modal State
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [dealToDelete, setDealToDelete] = useState(null);
  const token = localStorage.getItem("access-token")
  // Delete Mutation
  const deleteMutation = useMutation({
    mutationFn: async (id) =>
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/v1/travel-deals/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Send token in headers
        },
      }),
    onSuccess: () => {
      toast.success("Deal deleted successfully!");
      queryClient.invalidateQueries(["travel-deals"]);
    },
    onError: () => {
      toast.error("Failed to delete deal!");
    },
  });

  // Update Mutation
  const updateMutation = useMutation({
    mutationFn: async (updatedDeal) =>
      await axios.put(`${import.meta.env.VITE_BASE_URL}/api/v1/travel-deals/${updatedDeal._id}`, updatedDeal,{
        headers: {
          Authorization: `Bearer ${token}`, // Send token in headers
        },
      }),
    onSuccess: () => {
      toast.success("Deal updated successfully!");
      refetch();
      setIsEditModalOpen(false); // Close modal after success
    },
    onError: () => {
      toast.error("Failed to update deal!");
    },
  });

  if (isLoading) return <div className="flex items-center justify-center h-full"><DataLoading /></div>;
  if (isError) return <p className="text-red-500 text-center">{error.message}</p>;

  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto">
      <TitleProvider title="Manage Deals" />
      <h2 className="text-2xl font-bold mb-4 text-center">Manage Travel Deals</h2>

      <div className="overflow-x-auto">
        <table className="table w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2">Title</th>
              <th className="p-2">Destination</th>
              <th className="p-2">Image</th>
              <th className="p-2">Original Price</th>
              <th className="p-2">Discounted Price</th>
              <th className="p-2">Duration</th>
              <th className="p-2">Inclusions</th>
              <th className="p-2">Exclusions</th>
              <th className="p-2">Created At</th>
              <th className="p-2">Last Updated</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {deals.map((deal) => (
              <tr key={deal._id} className="border-b text-sm">
                <td className="p-2">{deal.title}</td>
                <td className="p-2">{deal.destination}</td>
                <td className="p-2">
                  <img src={deal.image} alt={deal.title} className="w-20 h-12 object-cover rounded-md" />
                </td>
                <td className="p-2 text-gray-500 font-semibold">৳{deal.originalPrice}</td>
                <td className="p-2 text-green-600 font-bold">৳{deal.discountedPrice}</td>
                <td className="p-2">{deal.duration}</td>
                <td className="p-2">{deal.inclusions.join(", ")}</td>
                <td className="p-2">{deal.exclusions.join(", ")}</td>
                <td className="p-2">{formatDate(deal.createdAt)}</td>
                <td className="p-2">{formatDate(deal.updatedAt)}</td>
                <td className="p-2 space-y-2">
                  {/* Edit Button */}
                  <button
                  disabled={updateMutation.isPending || deleteMutation.isPending}
                    className="btn btn-sm btn-primary w-full"
                    onClick={() => {
                      setSelectedDeal(deal);
                      setIsEditModalOpen(true);
                    }}
                  >
                    Edit
                  </button>
                  
                  {/* Delete Button */}
                  <button
                   disabled={updateMutation.isPending || deleteMutation.isPending}
                    className="btn btn-sm btn-error w-full"
                    onClick={() => {
                      setDealToDelete(deal._id);
                      setIsDeleteModalOpen(true);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {isEditModalOpen && (
        <EditDealsModal
          isOpen={isEditModalOpen}
          setIsOpen={setIsEditModalOpen}
          deal={selectedDeal}
          onUpdate={updateMutation.mutate}
        />
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <DeleteConfirmationModal
          isOpen={isDeleteModalOpen}
          setIsOpen={setIsDeleteModalOpen}
          onConfirm={() => {
            deleteMutation.mutate(dealToDelete);
          }}
        />
      )}
    </div>
  );
};

export default ManageDeals;

