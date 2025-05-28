import { Phone } from 'lucide-react';
import { Clock, FileText, Video, BarChart3, Bell, Users } from 'lucide-react';

export default function DigitalHealthSolutions() {
  const solutions = [
    {
      icon: Clock,
      title: "Inventory and Assets Control",
      description: "Monitor and exercise control over your hospital's resources and assets to enable best usage and cost savings."
    },
    {
      icon: FileText,
      title: "Billing and Collections",
      description: "Reduce the amount of time needed to issue bills and obtain payments as well as lessen the chances of issuing wrong bills."
    },
    {
      icon: Video,
      title: "Patient Management",
      description: "Make it easier for patients to fill out admission forms, schedule visits, access medical history, and procedures for patient discharge."
    },
    {
      icon: BarChart3,
      title: "Reports and Analytics",
      description: "Provide management with relevant information regarding the operational status of your hospital through dashboards and extensive reports."
    },
    {
      icon: Bell,
      title: "Alerts and Communication",
      description: "Promote interaction between the staff and patients as well as other stakeholders of the organization by use of notifications and alerts."
    },
    {
      icon: Users,
      title: "Staff and HR Management",
      description: "Maintain and allocate human resource schedules while also monitoring their productivity for better utilization of man hours."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Digital <span className="text-cyan-500">Health</span> Solutions
          </h1>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-blue-600 mb-4 leading-tight">
                  {solution.title}
                </h3>

                {/* Divider */}
                <div className="w-12 h-0.5 bg-gray-300 mb-4"></div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>





   

    </div>
  );
}