// completely fucking useless, i am aware
// Though typing Percent(60) is imo better than 0.65 or 65 * 100
export const Percent = (n: number) => n <= 1 && n >= 0 ? n : n / 100;