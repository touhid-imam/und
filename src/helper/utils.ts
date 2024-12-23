import moment from "moment";

export const formatPostDate = (date: string) => {
    return moment.utc(date).local().format("MMMM D, YYYY");
  };

