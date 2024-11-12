export interface Trend {
  value: string;
  label: string;
}

export interface StatData {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: Trend;
}

export interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  priority?: boolean;
  type?: string;
}

export interface Announcement {
  id: string;
  title: string;
  time: string;
}

export interface Activity {
  id: string;
  time: string;
  title: string;
  description: string;
}