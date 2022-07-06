import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// import contect
import { Data } from "./../App";

const Students = () => {
  const students = useContext(Data);

  const [category, setCategory] = useState("all");
  const [all_students, setAll_students] = useState(students);
  const [cycle_students, setCycle_students] = useState([]);
  const [cycle_number, setCycle_number] = useState(1);
  const [cycle_count, setCycle_count] = useState(all_students.at(-1).cycle);
  const [arr_for_map, setArr_for_map] = useState([]);

  arr_for_map.length = cycle_count;
  arr_for_map.fill(1, 0, cycle_count);

  useEffect(() => {
    setCycle_students(
      all_students.filter((element) => +element.cycle === +cycle_number)
    );
  }, [cycle_number, all_students]);

  const by_all = useRef();
  const by_cycle = useRef();
  const cycles = useRef();

  function by_all_handle_click() {
    by_all.current.classList.add("active");
    by_cycle.current.classList.remove("active");
    cycles.current.classList.add("hide");
    setCategory("all");
  }

  function by_cycle_handle_click(e) {
    by_cycle.current.classList.add("active");
    by_all.current.classList.remove("active");
    cycles.current.classList.remove("hide");
    setCategory("cycle");
  }

  return (
    <div className="students">
      {/* start control box */}
      <div className="control-box">
        <div className="container">
          {/* choose category all - cycles */}
          <div className="category">
            <div className="item by-all active" ref={by_all}>
              <i
                className="fa fa-users"
                aria-hidden="true"
                onClick={by_all_handle_click}
              ></i>
              <span>All Alumni</span>
            </div>

            <div className="item by-cycle" ref={by_cycle}>
              <i
                className="fa fa-graduation-cap"
                aria-hidden="true"
                onClick={by_cycle_handle_click}
              ></i>
              <span>By cycle</span>
            </div>
          </div>

          {/* choose cycle number */}
          <div className="cycles hide" ref={cycles}>
            <div className="item">
              <select
                value={cycle_number}
                onChange={(e) => setCycle_number(e.target.value)}
              >
                {arr_for_map.map((element, index) => {
                  return (
                    <option value={index + 1} key={index}>
                      Cycle {index + 1}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="item">
              <div className="cycle-number">
                <span>{cycle_number}</span> / {cycle_count} Cycle
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* start render students */}
      <section className="probootstrap-section">
        <div className="container">
          <div className="row">
            {/* strat map on students */}
            {(category === "all" ? all_students : cycle_students).map(
              ({ id, name, speciality, img }) => {
                return (
                  <div className="col-sm-6 col-md-4 col-lg-3" key={id}>
                    <div className="thumbnail">
                      <div className="overlay">
                        <Link to={`/alumni/${id}`} target="_blank">
                          <i className="fa fa-eye"></i>
                          <span>View Profile</span>
                        </Link>
                      </div>
                      <img
                        src={img !== "" ? img : "img/avatar.png"}
                        alt="..."
                      />
                      <div className="caption">
                        <h4>{name}</h4>
                        <p>{speciality ? speciality : "no-speciality"}</p>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
            {/* end map on students */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Students;
