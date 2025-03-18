import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useForm } from "react-hook-form";

const EditDealsModal = ({ isOpen, setIsOpen, deal, onUpdate }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: deal, // Prefill form
  });

  // Handle form submission
  const onSubmit = (data) => {
    // Convert inclusions & exclusions to arrays if input is string
    if (typeof data.inclusions === "string") {
      data.inclusions = data.inclusions.split(",").map((item) => item.trim());
    }
    if (typeof data.exclusions === "string") {
      data.exclusions = data.exclusions.split(",").map((item) => item.trim());
    }

    // Call the update function
    onUpdate(data);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-[999]"
    >
      {/* <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black/30"> */}
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black/50">
        <DialogPanel className="max-w-2xl w-full space-y-4  bg-white p-6 rounded-lg shadow-lg">
          <DialogTitle className="font-bold text-xl text-center text-gray-800">
            Edit Travel Deal
          </DialogTitle>

          {/* Scrollable Form */}
          <div className="max-h-[70vh] overflow-y-auto pr-2">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Read-only Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4"></div>

              {/* Editable Fields */}
              <div>
                <label className="block text-sm font-semibold text-gray-600">
                  Title
                </label>
                <input
                  {...register("title", { required: "Title is required" })}
                  className="input input-bordered w-full p-3 rounded-lg"
                />
                {errors.title && (
                  <p className="text-red-500 text-sm">{errors.title.message}</p>
                )}
              </div>

              {/* top deal */}
              <div>
                <label className="block text-sm font-semibold text-gray-600">
                  Top Deal
                </label>
                <div className="flex gap-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      {...register("topDeal")}
                      value="true"
                      id="topDealYes"
                      className="mr-2"
                      defaultChecked={deal.topDeal === true} // Ensure 'true' is selected when deal.topDeal is true
                    />
                    <label
                      htmlFor="topDealYes"
                      className="text-sm text-gray-600"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      {...register("topDeal")}
                      value="false"
                      id="topDealNo"
                      className="mr-2"
                      defaultChecked={deal.topDeal === false} // Ensure 'false' is selected when deal.topDeal is false
                    />
                    <label
                      htmlFor="topDealNo"
                      className="text-sm text-gray-600"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>

              {/* end of top deal */}

              <div>
                <label className="block text-sm font-semibold text-gray-600">
                  Destination
                </label>
                <input
                  {...register("destination", {
                    required: "Destination is required",
                  })}
                  className="input input-bordered w-full p-3 rounded-lg"
                />
                {errors.destination && (
                  <p className="text-red-500 text-sm">
                    {errors.destination.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-600">
                  Description
                </label>
                <textarea
                  {...register("description", {
                    required: "Description is required",
                  })}
                  className="textarea textarea-bordered w-full p-3 rounded-lg"
                  rows="3"
                />
                {errors.description && (
                  <p className="text-red-500 text-sm">
                    {errors.description.message}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-600">
                    Original Price (৳)
                  </label>
                  <input
                    type="number"
                    {...register("originalPrice", {
                      required: "Original price is required",
                      valueAsNumber: true,
                    })}
                    className="input input-bordered w-full p-3 rounded-lg"
                  />
                  {errors.originalPrice && (
                    <p className="text-red-500 text-sm">
                      {errors.originalPrice.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600">
                    Discounted Price (৳)
                  </label>
                  <input
                    type="number"
                    {...register("discountedPrice", {
                      required: "Discounted price is required",
                      valueAsNumber: true,
                    })}
                    className="input input-bordered w-full p-3 rounded-lg"
                  />
                  {errors.discountedPrice && (
                    <p className="text-red-500 text-sm">
                      {errors.discountedPrice.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-600">
                  Duration
                </label>
                <input
                  {...register("duration", {
                    required: "Duration is required",
                  })}
                  className="input input-bordered w-full p-3 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-600">
                  Image URL
                </label>
                <input
                  {...register("image", { required: "Image URL is required" })}
                  className="input input-bordered w-full p-3 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-600">
                  Inclusions
                </label>
                <input
                  {...register("inclusions")}
                  className="input input-bordered w-full p-3 rounded-lg"
                  placeholder="Enter inclusions separated by commas"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-600">
                  Exclusions
                </label>
                <input
                  {...register("exclusions")}
                  className="input input-bordered w-full p-3 rounded-lg"
                  placeholder="Enter exclusions separated by commas"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400 transition"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default EditDealsModal;
