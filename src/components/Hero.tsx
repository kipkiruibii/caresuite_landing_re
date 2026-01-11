import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Introducing{" "}
            <span className="text-blue-600 dark:text-blue-400">Care</span>
            <span className="text-green-600 dark:text-green-400">Suite</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            <span className="font-semibold text-blue-600">Streamline care management</span>{" "}
            with scheduling, HR & payroll, financing. Manage shifts, staff, clients, medications & eMAR. Track tasks, timesheets, digital forms & careplans.{" "}
            <span className="text-blue-600 font-semibold">Under development – join our pilot!</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg">
              Watch Demo Video
            </Button>
            <Button variant="default" size="lg">
              Join Waitlist
            </Button>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Learn more about CareSuite by watching our demo video or join our waitlist to get early access.
          </p>
        </div>
        <div className="mt-16 relative">
          <div className="relative mx-auto max-w-4xl h-96 sm:h-[500px] bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-900 dark:to-green-900 rounded-lg shadow-lg overflow-hidden flex items-center justify-center">
            <div className="text-center text-gray-600 dark:text-gray-300">
              <h3 className="text-2xl font-semibold mb-2">Dashboard Preview</h3>
              <p>Interactive admin dashboard for managing care operations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}