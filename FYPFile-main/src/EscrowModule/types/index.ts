export interface EscrowTransaction {
  _id: String;
  transactionId: String;
  title: String;
  subtitle: String;
  created: String;
  amount: Number;
  currency: String;
  role: String;
  status: {
    primary: String;
    secondary: String;
  };
  agreed: Boolean;
  step: Number;
  contract: [String];
  dispute: Boolean;
  disputeDetails: [String];
  inspectionPeriod: String;
  itemDescription: String;
  itemName: String;
  secondPersonEmail: String;
  secondPersonNumber: String;
  timeBounded: Boolean;
  creatorId: String;
}

export interface hellouser {

}