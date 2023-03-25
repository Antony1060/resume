export const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
] as const;
export type Month = (typeof monthNames)[number];

export const format = (date: Date) => {
    const day = date.getDate().toString().padStart(2, "0");

    return `${monthNames[date.getMonth()]} ${day} ${date.getFullYear()}`;
};
