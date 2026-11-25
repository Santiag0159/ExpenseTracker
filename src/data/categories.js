export const CATEGORIES = [
  { name: 'Alimentacion', icon: '🛒' },
  { name: 'Transporte', icon: '⛽' },
  { name: 'Servicios', icon: '🌐' },
];

export const DEFAULT_ICON = '🧾';

export function getCategoryIcon(categoryName) {
  const category = CATEGORIES.find((item) => item.name === categoryName);
  return category ? category.icon : DEFAULT_ICON;
}