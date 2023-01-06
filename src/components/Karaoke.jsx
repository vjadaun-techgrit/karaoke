import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

const Karaoke = () => (

    <div className="w-100">
      <div className={`text-center sticky-top w-100 py-4 mt-0 `}>
        <div className="col-8 offset-2 ">
          <SearchBar />
        </div>
      </div>
      <div className="container-fluid my-4">
        <SearchResults />
      </div>
    </div>
);

export default Karaoke;