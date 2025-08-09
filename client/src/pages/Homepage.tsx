import StackedBarChart from "../components/Charts/StackedBarChart";
import DashboardCard from "../components/DashboardCard";

const Homepage = () => {
  return (
    <div className="p-5">
      <div className="dashboard">
        <h1 className="heading text-3xl font-bold mb-5">Dashboard</h1>
        {/* Cards */}
        <ul className="flex justify-between gap-4 flex-wrap">
          <DashboardCard
            title={"Total Appointments"}
            num={2500}
            percent={20}
            isIncreased={true}
            img={"/assets/taimg.svg"}
          />
          <DashboardCard
            title={"Patients"}
            num={3145}
            percent={15}
            isIncreased={false}
            img={"/assets/tp.svg"}
          />
          <DashboardCard
            title={"Total Staffs"}
            num={350}
            percent={10}
            isIncreased={true}
            img={"/assets/tsimg.svg"}
          />
          <DashboardCard
            title={"Total Beds"}
            num={345}
            percent={30}
            isIncreased={false}
            img={"/assets/tbimg.svg"}
          />
        </ul>
        {/* Charts */}
        <div className="charts my-5 flex gap-5 flex-wrap">
          <div className="patient-by-department flex-2 bg-white p-5 rounded-lg min-w-[250px]">
            <h2 className="pb-3 font-semibold text-xl">
              Patient By Department
            </h2>
            <StackedBarChart />
          </div>
          <div className="overall-progress flex-1 bg-white rounded-lg min-w-[250px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
