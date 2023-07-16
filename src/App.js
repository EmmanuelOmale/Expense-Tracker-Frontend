import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet paper',
      amount: 94.12,
      date: new Date(2023, 7, 16)

    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.99,
      date: new Date(2023, 7, 16)
    },
    {
      id: 'e3',
      title: 'Car insurance',
      amount: 294.12,
      date: new Date(2023, 7, 16)
    }

  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem 
      title={expenses[0].title}
      date={expenses[0].date}
      amount={expenses[0].amount}/>
    </div>
  );
}

export default App;