import "./Home.scss";
import Widget from "../../Components/widget/Widget";
import Featured from "../../Components/featured/Featured";
import Chart from "../../Components/chart/Chart";
import Table from "../../Components/table/Table";

const Home = () => {
  return (
    <div className="home">

      <div className="homeContainer">
        <div className="widgets">
          <Widget type="user" />
          <Widget type="product" />
          <Widget type="order" />
          <Widget type="earning" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;