import type { MenuItem } from "../data/menu";

const SPICY_KEYWORDS = [
  "spicy",
  "picante",
  "habanero",
  "hot",
  "sriracha",
  "chile",
];

export function isSpicy(item: MenuItem): boolean {
  const text = `${item.name} ${item.description ?? ""}`.toLowerCase();
  return SPICY_KEYWORDS.some((keyword) => text.includes(keyword));
}
