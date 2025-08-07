"use client";

import { useRouter } from "next/navigation";
import { Trash, SquarePen } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useDeleteCarMutation } from "../../../app/redux/api/carsApi";
import useToast from "../../Shared/useCustomToast";

function ActionCell({ carId, refetch }) {
  const router = useRouter();
  const [deleteCar] = useDeleteCarMutation();
  const { showSuccess, showError } = useToast();

  const handleUpdate = () => {
    router.push(`/dashboard/manageCars/updateCar?id=${carId}`);
  };

  const handleDelete = async () => {
    try {
      await deleteCar(carId).unwrap();
      showSuccess("Car Deleted Successfully!");
    } catch (error) {
      console.log("Error deleting car:", error);
      showError("Failed to delete car. Please try again.");
    } finally {
      refetch();
    }
  };

  return (
    <div className="flex items-center justify-center gap-2">
      {/* update button */}
      <button
        onClick={handleUpdate}
        className="cursor-pointer rounded-lg bg-yellow-600 px-3 py-1 text-sm font-medium capitalize text-black hover:bg-yellow-500"
      >
        <SquarePen size={20} />
      </button>

      {/* delete button with dialog */}
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button className="cursor-pointer rounded-lg bg-red-500 px-3 py-1 text-sm font-medium capitalize text-black hover:bg-red-600">
            <Trash size={20} />
          </button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the car
              record.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default ActionCell;
