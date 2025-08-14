import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Chip,
  LinearProgress,
  Alert,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
} from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend,
} from 'recharts';
import {
  TrendingUp,
  People,
  Assessment,
  AttachMoney,
  Warning,
  CheckCircle,
  Info,
  Star,
} from '@mui/icons-material';
import { analyticsData } from '../../data/analyticsData';
import { format } from 'date-fns';

const AnalyticsDashboard: React.FC = () => {
  const { 
    dailyTrends, 
    testTypeDistribution, 
    departmentPerformance, 
    monthlyMetrics, 
    recentAlerts, 
    topPerformers 
  } = analyticsData;

  const MetricCard = ({ title, value, subtitle, icon, color, trend }: any) => (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box>
            <Typography color="textSecondary" gutterBottom variant="body2">
              {title}
            </Typography>
            <Typography variant="h4" component="div" sx={{ color }}>
              {value}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {subtitle}
            </Typography>
          </Box>
          <Box sx={{ color, opacity: 0.7 }}>
            {icon}
          </Box>
        </Box>
        {trend && (
          <Box mt={1}>
            <Chip 
              label={trend} 
              size="small" 
              color={trend.includes('+') ? 'success' : 'error'}
              variant="outlined"
            />
          </Box>
        )}
      </CardContent>
    </Card>
  );

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'warning': return <Warning />;
      case 'success': return <CheckCircle />;
      default: return <Info />;
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Analytics Dashboard
      </Typography>
      
      {/* Key Metrics */}
      <Grid container spacing={3} mb={4}>
        <Grid item xs={12} sm={6} md={3}>
          <MetricCard
            title="Total Revenue"
            value={`$${monthlyMetrics.totalRevenue.toLocaleString()}`}
            subtitle="This month"
            icon={<AttachMoney sx={{ fontSize: 40 }} />}
            color="#283618"
            trend="+12.5% vs last month"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <MetricCard
            title="Tests Completed"
            value={monthlyMetrics.totalTests.toLocaleString()}
            subtitle="This month"
            icon={<Assessment sx={{ fontSize: 40 }} />}
            color="#606c38"
            trend="+8.3% vs last month"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <MetricCard
            title="Active Patients"
            value={monthlyMetrics.totalPatients.toLocaleString()}
            subtitle="This month"
            icon={<People sx={{ fontSize: 40 }} />}
            color="#bc6c25"
            trend="+15.2% vs last month"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <MetricCard
            title="Test Accuracy"
            value={`${monthlyMetrics.testAccuracy}%`}
            subtitle="Quality metric"
            icon={<Star sx={{ fontSize: 40 }} />}
            color="#283618"
            trend="+0.3% vs last month"
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {/* Daily Trends Chart */}
        <Grid item xs={12} lg={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Daily Test Volume & Revenue Trends (Last 30 Days)
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={dailyTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="displayDate" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip 
                    formatter={(value, name) => [
                      name === 'revenue' ? `$${value}` : value,
                      name === 'testsCompleted' ? 'Tests' : 'Revenue'
                    ]}
                  />
                  <Legend />
                  <Line 
                    yAxisId="left"
                    type="monotone" 
                    dataKey="testsCompleted" 
                    stroke="#283618" 
                    strokeWidth={2}
                    name="Tests Completed"
                  />
                  <Line 
                    yAxisId="right"
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#bc6c25" 
                    strokeWidth={2}
                    name="Daily Revenue ($)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Test Type Distribution */}
        <Grid item xs={12} lg={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Test Type Distribution
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={testTypeDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {testTypeDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                </PieChart>
              </ResponsiveContainer>
              <Box mt={2}>
                {testTypeDistribution.map((item) => (
                  <Box key={item.name} display="flex" alignItems="center" justifyContent="space-between" mb={1}>
                    <Box display="flex" alignItems="center">
                      <Box 
                        width={12} 
                        height={12} 
                        bgcolor={item.color} 
                        borderRadius="50%" 
                        mr={1}
                      />
                      <Typography variant="body2">{item.name}</Typography>
                    </Box>
                    <Typography variant="body2" fontWeight="bold">
                      {item.count}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Department Performance */}
        <Grid item xs={12} lg={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Department Performance
              </Typography>
              <Box mt={2}>
                {departmentPerformance.map((dept) => (
                  <Box key={dept.department} mb={2}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                      <Typography variant="subtitle1">{dept.department}</Typography>
                      <Typography variant="body2" fontWeight="bold">
                        {dept.efficiency}% efficiency
                      </Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={dept.efficiency} 
                      sx={{ 
                        height: 8, 
                        borderRadius: 4,
                        backgroundColor: '#f0f0f0',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: dept.efficiency > 90 ? '#283618' : dept.efficiency > 85 ? '#606c38' : '#bc6c25'
                        }
                      }}
                    />
                    <Box display="flex" justifyContent="space-between" mt={1}>
                      <Typography variant="caption" color="textSecondary">
                        {dept.testsCompleted} tests completed
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        Avg: {dept.avgTime} min
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Recent Alerts */}
        <Grid item xs={12} lg={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recent System Alerts
              </Typography>
              <Box mt={2}>
                {recentAlerts.map((alert) => (
                  <Alert 
                    key={alert.id}
                    severity={alert.type as any}
                    icon={getAlertIcon(alert.type)}
                    sx={{ mb: 1 }}
                  >
                    <Box>
                      <Typography variant="body2">{alert.message}</Typography>
                      <Typography variant="caption" color="textSecondary">
                        {format(alert.timestamp, 'MMM dd, yyyy HH:mm')}
                      </Typography>
                    </Box>
                  </Alert>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Top Performers */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Top Performers This Month
              </Typography>
              <List>
                {topPerformers.map((performer, index) => (
                  <ListItem key={performer.name}>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: index === 0 ? '#283618' : '#606c38' }}>
                        {performer.name.split(' ').map(n => n[0]).join('')}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={performer.name}
                      secondary={`${performer.department} • ${performer.testsCompleted} tests completed`}
                    />
                    <ListItemSecondaryAction>
                      <Box textAlign="right">
                        <Typography variant="body2" fontWeight="bold">
                          {performer.accuracy}% accuracy
                        </Typography>
                        <Chip 
                          label={index === 0 ? "🏆 Top Performer" : `#${index + 1}`}
                          size="small"
                          color={index === 0 ? "primary" : "default"}
                          variant={index === 0 ? "filled" : "outlined"}
                        />
                      </Box>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AnalyticsDashboard;