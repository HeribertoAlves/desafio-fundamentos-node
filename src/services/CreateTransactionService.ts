import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

export interface CreateTransaction {
  title: string;
  value: number;
  type: string;
}
class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: CreateTransaction): Transaction {
    const valueType = type === 'income' ? 'income' : 'outcome';

    const transaction = this.transactionsRepository.create({
      title,
      value,
      type: valueType,
    });
    return transaction;
  }
}

export default CreateTransactionService;
