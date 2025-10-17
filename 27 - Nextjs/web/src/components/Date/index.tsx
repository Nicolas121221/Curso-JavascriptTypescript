import { formatDate } from "@/utils/format-date";
import { JSX } from "react";

export type DateProps = {
  date: string;
};

export const Date = ({ date }: DateProps): JSX.Element => {
  return <span>{formatDate(date)}</span>;
};
