import { AuthCheck } from "@/components/auth/AuthCheck";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { MainNav } from "@/components/nav/MainNav";

// Mock user data - In a real app, this would come from your backend
const userData = {
  id: "USR123456",
  name: "Ahmad bin Abdullah",
  email: "ahmad@example.com",
  bookings: [
    {
      id: "BK789012",
      provider: "Al-Safwah Travel",
      package: "Premium Umrah Package",
      departureDate: "2024-05-15",
      status: "Confirmed",
      payment: {
        total: 15000,
        paid: 12000,
        dueDate: "2024-04-15"
      }
    }
  ]
};

const Dashboard = () => {
  const paymentProgress = (userData.bookings[0].payment.paid / userData.bookings[0].payment.total) * 100;

  return (
    <AuthCheck>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <MainNav />
        <main className="container mx-auto px-4 py-8">
          <h1 className="mb-8 text-3xl font-bold">User Dashboard</h1>
          
          <div className="grid gap-6 md:grid-cols-2">
            {/* User Information */}
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <p className="text-sm text-muted-foreground">User ID</p>
                  <p className="font-medium">{userData.id}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Name</p>
                  <p className="font-medium">{userData.name}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{userData.email}</p>
                </div>
              </CardContent>
            </Card>

            {/* Booking Information */}
            <Card>
              <CardHeader>
                <CardTitle>Current Booking</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <p className="text-sm text-muted-foreground">Booking ID</p>
                  <p className="font-medium">{userData.bookings[0].id}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Provider</p>
                  <p className="font-medium">{userData.bookings[0].provider}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Package</p>
                  <p className="font-medium">{userData.bookings[0].package}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Departure Date</p>
                  <p className="font-medium">{userData.bookings[0].departureDate}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <p className="font-medium">{userData.bookings[0].status}</p>
                </div>
              </CardContent>
            </Card>

            {/* Payment Progress */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Payment Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Progress value={paymentProgress} className="h-2" />
                <div className="flex justify-between text-sm">
                  <div>
                    <p className="text-muted-foreground">Paid Amount</p>
                    <p className="font-medium">RM {userData.bookings[0].payment.paid.toLocaleString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-muted-foreground">Total Amount</p>
                    <p className="font-medium">RM {userData.bookings[0].payment.total.toLocaleString()}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Next Payment Due</p>
                  <p className="font-medium">{userData.bookings[0].payment.dueDate}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </AuthCheck>
  );
};

export default Dashboard;