import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function useStartEscrow() {
  const selecCurrencyOption = ["PK", "USD", "CAD"];
  const selectRoleOption = ["Buyer", "Seller", "Both"];
  const [showBox, setShowBox] = useState(false);
  const [secondPerson, setSecondPerson] = useState("");
  const navigate = useNavigate();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    const item = data;
    if (!showBox) {
      setShowBox(true);
      console.log("inbox");
      if (item.MyRole == "Buyer") {
        setSecondPerson("Seller");
        console.log("Seller");
      } else {
        setSecondPerson("Buyer");
        console.log("Buyer");
      }
    } else if (showBox) {
      navigate("/contract", { state: { item, addingTerms: false } });
    }
  };

  return {
    control,
    register,
    handleSubmit,
    onSubmit,
    errors,
    selecCurrencyOption,
    selectRoleOption,
    showBox,
    secondPerson,
    watch,
  };
}

export default useStartEscrow;
