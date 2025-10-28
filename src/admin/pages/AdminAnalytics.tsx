import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockSalesData, mockCategoryData } from "../data/mockAdminData";
import { BarChart, Bar, LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const revenueGrowth = [
  { month: "Jan", revenue: 4500, expenses: 2800, profit: 1700 },
  { month: "Feb", revenue: 5200, expenses: 3100, profit: 2100 },
  { month: "Mar", revenue: 4800, expenses: 2900, profit: 1900 },
  { month: "Apr", revenue: 6100, expenses: 3400, profit: 2700 },
  { month: "May", revenue: 5500, expenses: 3200, profit: 2300 },
  { month: "Jun", revenue: 7200, expenses: 3800, profit: 3400 },
];

export default function AdminAnalytics() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-heading font-bold text-foreground">Analytics</h1>
        <p className="text-muted-foreground mt-2">Detailed insights and performance metrics</p>
      </div>

      {/* Revenue, Expenses, Profit Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="font-heading">Revenue, Expenses & Profit</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={revenueGrowth}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px"
                }} 
              />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="revenue" 
                stroke="hsl(var(--primary))" 
                fillOpacity={1} 
                fill="url(#colorRevenue)" 
                name="Revenue (LKR)"
              />
              <Area 
                type="monotone" 
                dataKey="profit" 
                stroke="#10b981" 
                fillOpacity={1} 
                fill="url(#colorProfit)"
                name="Profit (LKR)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Category Sales Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="font-heading">Sales by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={mockCategoryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }} 
                />
                <Legend />
                <Bar dataKey="sales" fill="hsl(var(--primary))" name="Sales (LKR)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Monthly Growth Line Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="font-heading">Monthly Growth Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={mockSalesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }} 
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="sales" 
                  stroke="#f43f5e" 
                  strokeWidth={3}
                  dot={{ fill: '#f43f5e', r: 5 }}
                  name="Sales (LKR)"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Avg Order Value</p>
              <p className="text-3xl font-bold font-heading text-primary mt-2">LKR 133.56</p>
              <p className="text-xs text-green-600 mt-1">+5.2%</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Conversion Rate</p>
              <p className="text-3xl font-bold font-heading text-primary mt-2">3.24%</p>
              <p className="text-xs text-green-600 mt-1">+0.8%</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Return Rate</p>
              <p className="text-3xl font-bold font-heading text-foreground mt-2">1.2%</p>
              <p className="text-xs text-red-600 mt-1">-0.3%</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Customer Retention</p>
              <p className="text-3xl font-bold font-heading text-primary mt-2">68%</p>
              <p className="text-xs text-green-600 mt-1">+3.1%</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
