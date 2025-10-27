// Mock data for admin dashboard
export const mockStats = {
  totalSales: 45678.90,
  totalOrders: 342,
  totalCustomers: 156,
  bestSellingProduct: "Red Rose Bouquet"
};

export const mockSalesData = [
  { month: "Jan", sales: 4500 },
  { month: "Feb", sales: 5200 },
  { month: "Mar", sales: 4800 },
  { month: "Apr", sales: 6100 },
  { month: "May", sales: 5500 },
  { month: "Jun", sales: 7200 },
];

export const mockCategoryData = [
  { name: "Flowers", value: 35, sales: 15987 },
  { name: "Gifts", value: 30, sales: 13703 },
  { name: "Decor", value: 20, sales: 9136 },
  { name: "Accessories", value: 15, sales: 6853 },
];

export const mockOrders = [
  { id: "ORD-001", customerName: "Emily Johnson", amount: 159.97, status: "Delivered", date: "2025-10-20" },
  { id: "ORD-002", customerName: "Michael Chen", amount: 89.98, status: "Shipped", date: "2025-10-22" },
  { id: "ORD-003", customerName: "Sarah Williams", amount: 234.95, status: "Processing", date: "2025-10-24" },
  { id: "ORD-004", customerName: "David Brown", amount: 129.99, status: "Pending", date: "2025-10-25" },
  { id: "ORD-005", customerName: "Jessica Davis", amount: 199.97, status: "Delivered", date: "2025-10-26" },
  { id: "ORD-006", customerName: "James Wilson", amount: 79.99, status: "Shipped", date: "2025-10-26" },
];

export const mockCustomers = [
  { id: 1, name: "Emily Johnson", email: "emily.j@email.com", totalOrders: 8, totalSpent: 687.50 },
  { id: 2, name: "Michael Chen", email: "m.chen@email.com", totalOrders: 5, totalSpent: 445.80 },
  { id: 3, name: "Sarah Williams", email: "sarah.w@email.com", totalOrders: 12, totalSpent: 1234.90 },
  { id: 4, name: "David Brown", email: "d.brown@email.com", totalOrders: 3, totalSpent: 289.97 },
  { id: 5, name: "Jessica Davis", email: "jessica.d@email.com", totalOrders: 15, totalSpent: 1567.85 },
];

export const mockProducts = [
  { id: "1", name: "Red Rose Bouquet", category: "Flowers", price: 59.99, stock: 24, sold: 145 },
  { id: "2", name: "Pink Peony Arrangement", category: "Flowers", price: 79.99, stock: 18, sold: 98 },
  { id: "5", name: "Heart-Shaped Jewelry Box", category: "Gifts", price: 34.99, stock: 32, sold: 87 },
  { id: "8", name: "Romantic Candle Set", category: "Gifts", price: 29.99, stock: 45, sold: 112 },
  { id: "11", name: "LED Rose String Lights", category: "Decor", price: 27.99, stock: 28, sold: 76 },
  { id: "13", name: "Matching Couple Bracelets", category: "Accessories", price: 44.99, stock: 15, sold: 93 },
];

export const orderStatuses = ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"];
