import Header from "../components/Header";
import Card from "../components/Card";
import TodoContainer from "../components/TodoContainer";
import { useLocation } from "react-router-dom";

function Landing() {
  const data = useLocation();
  return (
    <div className="bg-black p-14">
      <div className="bg-white p-10 border rounded-md shadow-lg">
        {/* Header Component */}
        <Header name={data.state.name} />
        <div className="flex gap-7 justify-between my-5 flex-wrap">
          <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
          <Card
            bgcolor={"#1303a3"}
            title={"Dececmber 20"}
            subtitle={"14:05:25"}
          />
          <Card bgcolor={"#1f9c23"} title={"Built Using"} subtitle={"React"} />
        </div>

        {/* Todo Container Component */}
        <TodoContainer />
      </div>
    </div>
  );
}

export default Landing;
