import { NavLink, Link } from "react-router-dom";
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  BarChart3,
  Heart,
  Home
} from "lucide-react";

const menuItems = [
  { title: "Dashboard", url: "/admin/dashboard", icon: LayoutDashboard },
  { title: "Products", url: "/admin/products", icon: Package },
  { title: "Orders", url: "/admin/orders", icon: ShoppingCart },
  { title: "Customers", url: "/admin/customers", icon: Users },
  { title: "Analytics", url: "/admin/analytics", icon: BarChart3 },
];

export function AdminSidebar() {
  return (
    <aside className="w-64 bg-card border-r border-border min-h-screen sticky top-0">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-2">
          <Heart className="h-8 w-8 text-primary fill-primary" />
          <div>
            <h2 className="font-heading text-xl font-bold text-foreground">Party City</h2>
            <p className="text-xs text-muted-foreground">Admin Panel</p>
          </div>
        </div>
      </div>
      
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.title}>
              <NavLink
                to={item.url}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`
                }
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="absolute bottom-4 left-4 right-4 space-y-2">
        <Link to="/">
          <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
            <Home className="h-4 w-4" />
            Back to Home
          </button>
        </Link>
        <div className="p-4 bg-muted/50 rounded-lg border border-border">
          <p className="text-xs text-muted-foreground text-center">
            Party City Management
          </p>
        </div>
      </div>
    </aside>
  );
}
