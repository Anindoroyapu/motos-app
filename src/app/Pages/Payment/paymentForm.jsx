import React from "react";
import "../BikePrice/bikePrice";

function Brand() {
  return (
    <div
      className="bikePrice-header border w-75 d-inline-block fs-6"
      style={{ marginLeft: "17rem" }}
    >
      <div>
        <div className="fs-3 fw-bolder border border-secondary-subtle home-header">
          MOTOS
        </div>
        <div className="container">
          <div className="form-group">
            <div className="m-2">
              <label className="form-label">Name :</label>
              <input
                type="text"
                placeholder="Your Name.."
                className="form-control"
              />
            </div>
            <div className="m-2">
              <label className="form-label">Phone :</label>
              <input
                type="text"
                placeholder="Your Phone Number.."
                className="form-control"
              />
            </div>
            <div className="m-2 row">
              <div className="col">
                <label className="form-label">District :</label>
                <input
                  type="text"
                  placeholder="Your District.."
                  className="form-control"
                />
              </div>
              <div className="col">
                <label className="form-label">Full Address :</label>
                <input
                  type="text"
                  placeholder="Your Full Address.."
                  className="form-control"
                />
              </div>
            </div>
            <div className="m-2 row">
              <div className="col">
                <label className="form-label">Brand :</label>
                <input
                  type="text"
                  placeholder="Brand.."
                  className="form-control"
                />
              </div>
              <div className="col">
                <label className="form-label">Model :</label>
                <input
                  type="text"
                  placeholder="Model.."
                  className="form-control"
                />
              </div>
            </div>
            <div className="m-2 row">
              <div className="col">
                <label className="form-label">Color :</label>
                <input
                  type="text"
                  placeholder="Color.."
                  className="form-control"
                />
              </div>
              <div className="col">
                <label className="form-label">
                  Interestted to buy Within :
                </label>
                <input type="text" placeholder=" " className="form-control" />
              </div>
            </div>
            <div className="m-2 ">
              <label className="form-label">Note :</label>
              <input
                type="text"
                placeholder="Your note type here... "
                className="form-control"
              />
            </div>
            <div className="m-3 gap-3 float-end">
              <div className="">
                <button type="button" class="btn btn-outline-secondary m-3">
                  Close
                </button>

                <button type="button" class="btn btn-outline-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brand;
