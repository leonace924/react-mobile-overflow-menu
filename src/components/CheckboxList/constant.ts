export type checkListProps = {
  name: string;
  value: string;
  isChecked: boolean;
}[];

export const checkList: checkListProps = [
  {
    name: 'high',
    value: 'High - HD quality',
    isChecked: true,
  },
  {
    name: 'beauty',
    value: 'Beauty filter',
    isChecked: false,
  },
  {
    name: 'reminder',
    value: 'Reminder on',
    isChecked: false,
  },
];
