import { format, subDays, startOfWeek, endOfWeek } from 'date-fns';

// Generate realistic analytics data
export const generateAnalyticsData = () => {
  const now = new Date();
  const last30Days = Array.from({ length: 30 }, (_, i) => {
    const date = subDays(now, 29 - i);
    return {
      date: format(date, 'yyyy-MM-dd'),
      displayDate: format(date, 'MMM dd'),
      testsCompleted: Math.floor(Math.random() * 50) + 20,
      patientsRegistered: Math.floor(Math.random() * 15) + 5,
      revenue: Math.floor(Math.random() * 5000) + 2000,
      averageProcessingTime: Math.floor(Math.random() * 60) + 30, // minutes
    };
  });

  const testTypeDistribution = [
    { name: 'Blood Chemistry', value: 35, count: 245, color: '#283618' },
    { name: 'Hematology', value: 25, count: 175, color: '#606c38' },
    { name: 'Microbiology', value: 20, count: 140, color: '#bc6c25' },
    { name: 'Immunology', value: 12, count: 84, color: '#ccd5ae' },
    { name: 'Genetics', value: 8, count: 56, color: '#fefae0' },
  ];

  const departmentPerformance = [
    { department: 'Chemistry', efficiency: 94, testsCompleted: 245, avgTime: 35 },
    { department: 'Hematology', efficiency: 89, testsCompleted: 175, avgTime: 28 },
    { department: 'Microbiology', efficiency: 87, testsCompleted: 140, avgTime: 65 },
    { department: 'Immunology', efficiency: 92, testsCompleted: 84, avgTime: 45 },
    { department: 'Genetics', efficiency: 85, testsCompleted: 56, avgTime: 120 },
  ];

  const monthlyMetrics = {
    totalRevenue: 125000,
    totalTests: 1247,
    totalPatients: 892,
    averageWaitTime: 18, // minutes
    patientSatisfaction: 4.7,
    testAccuracy: 99.2,
    equipmentUtilization: 87,
    staffProductivity: 91,
  };

  const recentAlerts = [
    {
      id: 1,
      type: 'warning',
      message: 'Chemistry Analyzer #3 requires calibration',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      severity: 'medium',
    },
    {
      id: 2,
      type: 'info',
      message: 'Monthly QC review scheduled for tomorrow',
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
      severity: 'low',
    },
    {
      id: 3,
      type: 'success',
      message: 'Backup system test completed successfully',
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
      severity: 'low',
    },
  ];

  const topPerformers = [
    { name: 'Dr. Sarah Johnson', testsCompleted: 156, accuracy: 99.8, department: 'Chemistry' },
    { name: 'Michael Chen', testsCompleted: 134, accuracy: 99.5, department: 'Hematology' },
    { name: 'Emily Rodriguez', testsCompleted: 122, accuracy: 99.7, department: 'Microbiology' },
    { name: 'Dr. James Wilson', testsCompleted: 98, accuracy: 99.9, department: 'Immunology' },
  ];

  return {
    dailyTrends: last30Days,
    testTypeDistribution,
    departmentPerformance,
    monthlyMetrics,
    recentAlerts,
    topPerformers,
  };
};

export const analyticsData = generateAnalyticsData();