import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">CareSuite</h3>
            <p className="text-gray-400 mb-4">
              Streamlining care management for agencies worldwide.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
              <p>Contact: sales@caresuite.care</p>
              <p className="text-gray-500">© {new Date().getFullYear()} CareSuite. All rights reserved.</p>
            </div>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <div className="flex space-x-4 mb-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                GitHub
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                LinkedIn
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                Twitter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}