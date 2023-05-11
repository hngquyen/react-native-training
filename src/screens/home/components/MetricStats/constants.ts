export const enum GroupCount {
  Time_24_hours = '1',
  Time_7_days = '2',
  Time_30_days = '3',
  Time_All = '4',
}

export const filterList: Array<{label: string; id: GroupCount}> = [
  {label: 'Last 24h', id: GroupCount.Time_24_hours},
  {label: '7 days', id: GroupCount.Time_7_days},
  {label: '30 days', id: GroupCount.Time_30_days},
  {label: 'All', id: GroupCount.Time_All},
];
