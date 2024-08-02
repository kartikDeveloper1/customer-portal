import  { useState } from 'react';
import CustomerCard from './CustomerCard';
import CustomerDetails from './CustomerDetails';
import data from './Customer.json'
export interface Customer {
  id: number;
  name: string;
  title: string;
  address: string;
}

const CustomerList = () => {
  const [customers] = useState<any>(data);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);


  const handleCustomerClick = (customer: Customer) => {
    setSelectedCustomer(customer);
  };

  return (
    <div className='main-content'>
    <div>
        <h2 className='customer-heading'>Customer Portal</h2>
      </div>
    <div className="customer-portal">
      
      <div className="customer-list">
        { (
          customers?.map((customer:any) => (
            <CustomerCard
              key={customer.id}
              customer={customer}
              onClick={handleCustomerClick}
              isSelected={customer === selectedCustomer}
            />
          ))
        )}
      </div>
      {selectedCustomer && (
        <CustomerDetails customer={selectedCustomer} />
      )}
    </div>
    </div>
  );
};

export default CustomerList;