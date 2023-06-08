import './App.css';
import CardComponent from './components/card';
import Table from './components/table';
import Navbar from './navbar';
import DateRangeFilter from './components/date_range_filter';

function App() {
  const columns = ["Name", "Created Date", "Calendars", "Recordings", "Attendance Reports"]
  const data = [
    ['BDSE04-WDF-0322', 'Sept. 12, 2022', '60', '60', '28'],
    ['DSE02-CPL-0921(WOU)', 'Sept. 12, 2022', '65', '60', '28'],
    ['PHWC-BDSE03-API-1121', 'Sept. 12, 2022', '25', '60', '28'],
    ['BDSE06-PFS-0622', 'Sept. 12, 2022', '40', '38', '28'],
    ['JISC-BDSE03-API-1121', 'Sept. 12, 2022', '12', '60', '28'],
  ];

  return (
    <>
      <Navbar />
      
      <div className="wrapper">
        <DateRangeFilter />
        <div className="card-row">
          <CardComponent title="Groups" totalCount="68" increment="↑ 51" days="7" />
          <CardComponent title="Calendars" totalCount="3947" increment="↑ 2571" days="7" />
          <CardComponent title="Recordings" totalCount="1869" increment="↑ 1446" days="7" />
          <CardComponent title="Attendance Reports" totalCount="571" increment="↑ 368" days="7" />
        </div>

        <div style={{ backgroundColor: '#e3e3e3', padding: '1.5em' }}>
          <b>All Groups data</b>
        </div>
        <div>
          <Table classname="table" columns={columns} data={data} />
        </div>
      </div>
    </>
  );
}

export default App;
