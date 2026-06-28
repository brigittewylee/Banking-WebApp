export type Transaction = {
    transactionId: number,
    transactionDescription: string | null,
    withdrawAccountId: number;
    depositAccountId: number;
    timestamp: Date;
    amount: number;
}
