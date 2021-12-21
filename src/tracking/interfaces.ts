export interface ITrackingBatch {
  trackers: ITracking[];
}

export interface ITracking {
  transaction_id: string;
  tracking_number: string;
  status: string;
  carrier: string;
}
