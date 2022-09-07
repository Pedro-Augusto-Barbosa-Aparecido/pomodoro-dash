interface DateOnFirebase {
  seconds: number;
  nanoseconds: number;

}

export interface Timer {
  closedAt: DateOnFirebase;
  createdAt: DateOnFirebase;
  id: string;
  projectName: string;
  status: string;
  time: number;
  task: string;
  userKey: string;
  userName: string;

}

export interface ChartData {
  labels: Array<string>;
  datasets: Array<number>;
}
