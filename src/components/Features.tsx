import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    title: "Advanced Scheduling",
    description: "Complex scheduling made simple with AI-powered suggestions based on staff availability, hours worked, and care requirements.",
    highlights: ["Shift management", "Staff availability tracking", "Automated recommendations"],
  },
  {
    title: "Digital Document Management",
    description: "Easy storage and retrieval of operational and management documents. Generate forms for staff with built-in auditing functionality.",
    highlights: ["Document storage", "Form generation", "Audit trails"],
  },
  {
    title: "HR & Payroll Management",
    description: "Comprehensive employee management including payroll processing, leave tracking, performance reviews, and contract management.",
    highlights: ["Employee profiles", "Payroll automation", "Leave management"],
  },
  {
    title: "Financial Planning & Tracking",
    description: "Plan budgets, track expenses, manage transactions, income payments, vendors, and staff reimbursements.",
    highlights: ["Budget planning", "Expense tracking", "Vendor management"],
  },
];

export default function Features() {
  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features for Care Management
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to manage your care agency efficiently, from scheduling to finances.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {feature.highlights.map((highlight, i) => (
                    <Badge key={i} variant="secondary">{highlight}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}