export const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dev"] as const;
export type Month = typeof monthNames[number];

export const format = (date: Date) =>
    `${monthNames[date.getMonth()]} ${(date.getDate() + "").padStart(2, "0")} ${date.getFullYear()}`