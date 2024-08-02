import { Customer } from './CustomerList';

interface CustomerCardProps {
  customer: Customer;
  onClick: (customer: Customer) => void;
  isSelected: boolean;
}

const CustomerCard = ({ customer, onClick, isSelected }: CustomerCardProps) => {
  return (
    <div
      className={`customer-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onClick(customer)}
    >
      <h2>{customer.name}</h2>
      <p>{customer.title}</p>
    </div>
  );
};

export default CustomerCard;