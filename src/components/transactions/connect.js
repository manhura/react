import { connect } from 'react-redux';
import * as transactionsActions from '../../actions/transactions';

export const mapStateToProps = state => ({
  transactions: state.transactions,
});

export const mapDispatchToProps = dispatch => ({
  getTransactions: transactionsActions.getTransactions(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps);
