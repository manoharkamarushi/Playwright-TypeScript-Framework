export function calculateMargin(revenue: number, cop: number) {
  return revenue - cop;
}

export function calculateMarginPercent(revenue: number, cop: number) {
  return ((revenue - cop) / revenue) * 100;
}