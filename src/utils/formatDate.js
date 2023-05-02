import { format } from "date-fns";
import { es } from "date-fns/locale";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return format(date, "dd MMMM, yyyy", { locale: es });
};

export default formatDate;
