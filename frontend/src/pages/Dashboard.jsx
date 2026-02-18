export default function Dashboard() {
  const modules = [
    { title: "Student Management", status: "Active", icon: "📊" },
    { title: "Inventory", status: "Nominal", icon: "📦" },
    { title: "Financials", status: "Secure", icon: "💳" },
    { title: "System Logs", status: "Running", icon: "📜" },
  ];
  return (
    <div className="grow p-8 bg-[#0f172a] text-white">
        <header className="mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight">Faculty Dashboard</h1>
          <p className="text-gray-400 mt-2">All GOod </p>
        </header>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{modules.map((module, index) =>(
        <div key={index} className="p-6 bg-[#1e293b] border border-gray-700 rounded-xl hover:border-blue-500 transition-colors cursor-pointer group shadow-lg">
      <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
        {module.icon}
        </div>

      <h3 className="text-lg font-bold">{module.title}</h3>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-xs text-gray-400 uppercase tracking-widest">{module.status}</span>
            </div>
        </div>
          ))}
      </div>

      <div className="mt-10 h-64 border-2 border-dashed border-gray-800 rounded-2xl flex items-center justify-center text-gray-600">
        <p className="italic">Telemetry data stream waiting for Node.js uplink...</p>
      </div>
    </div>
  );
}