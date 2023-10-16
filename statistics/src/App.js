import SearchForm from "./components/SearchForm";
import Show from "./components/Show";
import { useState } from "react";
import "./styles/rootStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AxiosFun from "./FetchingData/AxiosFun";
function App() {
  const [search, setSearch] = useState({});
  const [datas, setdatas] = useState([]);
  const [checkvalue, setChecknalue] = useState("");
  const grab = async () => {
    if (search == {}) {
      alert("請輸入搜尋條件");
    }
    try {
      let response = await AxiosFun.get(search);
      let thearr = response.data;
      thearr = thearr.map((item) => Object.values(item));
      thearr = thearr.map((item) => [
        `${thearr.indexOf(item) + 1} ` + item[0],
        item[1],
      ]);
      console.log(thearr);
      setdatas(thearr);
    } catch (e) {
      console.log(e);
    }
  };
  const clear = () => {
    setSearch({});
    setChecknalue("");
  };
  return (
    <div className="App minHeight d-flex flex-column justify-content-between">
      <header>
        <h1 style={{ color: "white" }}>Logo</h1>
      </header>
      <SearchForm
        search={search}
        clear={clear}
        setSearch={setSearch}
        grab={grab}
        checkvalue={checkvalue}
        setChecknalue={setChecknalue}
      />
      <Show datas={datas} />
      <header>
        <h1 style={{ color: "white" }}>Logo</h1>
      </header>
    </div>
  );
}

export default App;
