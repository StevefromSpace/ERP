import ModuleCard from "../components/ModuleCard";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {

  const navigate=useNavigate();

  const handleModuleSelect=(name)=>{

    console.log('Access Granted: ${moduleName}');
    alert('Accessing $moduleName Terminal');

    if(name=="Logs"){
      navigate("/Dashboard/Logger");
    }
    else{
      navigate("/Error");
    }
  };

  const modules = [
    { title: "Student Management", status: "Active", icon: "📊" },
    { title: "Database", status: "Nominal", icon: "📦" },
    { title: "Autentication", status: "Secure", icon: "💳" },
    { title: "Logs", status: "Running", icon: "📜" },
  ];
  return (
    <div className="grow p-8 bg-[#0f172a] text-white">
        <header className="mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight">Faculty Dashboard</h1>
          <p className="text-gray-400 mt-2">All GOod </p>
        </header>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {modules.map((module, index) =>(

          <ModuleCard
            key={index}
            title={module.title}
            icon={module.icon}
            status={module.status}
            onSelect={handleModuleSelect}
          />
        
          ))}
      </div>

      <div className="mt-10 h-64 border-2 border-dashed border-gray-800 rounded-2xl flex items-center justify-center text-gray-600">
        <p className="italic">Telemetry data stream waiting for Node.js uplink...</p>
      </div>
    </div>
  );
}