import React from 'react';

// Mock user feedback data - you can remove this when integrating with real data
const defaultUserFeedbackData = [
  {
    ticketId: '188',
    userId: '188',
    category: '188',
    priority: '188',
    agentAssigned: '188',
    resolutionTime: '188',
    feedbackScore: '188',
    comments: '188'
  }
];

const UserFeedbackCard = ({ feedbackData = defaultUserFeedbackData, onExport, onViewDetails }) => {
  const handleExport = () => {
    if (onExport) {
      onExport(feedbackData);
    } else {
      // Default export behavior
      console.log('Exporting feedback data:', feedbackData);
    }
  };

  const handleViewDetails = (rowData) => {
    if (onViewDetails) {
      onViewDetails(rowData);
    } else {
      // Default view behavior
      console.log('Viewing details for:', rowData);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">User Feedback</h3>
        <button 
          onClick={handleExport}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          Export
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">Ticket ID</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">User ID</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">Category</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">Priority</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">Agent Assigned</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">Resolution Time</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">Feedback Score</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">Comments</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">Details</th>
            </tr>
          </thead>
          <tbody>
            {feedbackData.map((row, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 text-sm text-blue-600 font-medium">{row.ticketId}</td>
                <td className="py-3 px-4 text-sm text-blue-600">{row.userId}</td>
                <td className="py-3 px-4 text-sm text-blue-600">{row.category}</td>
                <td className="py-3 px-4 text-sm text-blue-600">{row.priority}</td>
                <td className="py-3 px-4 text-sm text-blue-600">{row.agentAssigned}</td>
                <td className="py-3 px-4 text-sm text-blue-600">{row.resolutionTime}</td>
                <td className="py-3 px-4 text-sm text-blue-600">{row.feedbackScore}</td>
                <td className="py-3 px-4 text-sm text-blue-600">{row.comments}</td>
                <td className="py-3 px-4">
                  <button 
                    onClick={() => handleViewDetails(row)}
                    className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700 transition-colors"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserFeedbackCard;